"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  ExternalLink,
  Check,
  Clock,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils/format";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { getPlatformColor } from "@/lib/utils/platform-colors";

interface AccountCardProps {
  account: {
    _id: string;
    title: string;
    platform: {
      _ref: string;
      name: string;
      logo?: {
        asset: {
          url: string;
        };
      };
    };
    category: string;
    price: number;
    features: string[];
    metrics?: {
      followers?: number;
      engagement?: number;
      posts?: number;
      age?: number;
    };
    status: "available" | "sold" | "pending";
    createdAt: string;
  };
}

export function AccountCard({ account }: AccountCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const platformColor = getPlatformColor(account.platform.name.toLowerCase());

  const getMetricIcon = (key: string) => {
    switch (key) {
      case "followers":
        return <Users className="w-3 h-3" />;
      case "engagement":
        return <TrendingUp className="w-3 h-3" />;
      case "age":
        return <Calendar className="w-3 h-3" />;
      case "posts":
        return <MessageSquare className="w-3 h-3" />;
      default:
        return <Star className="w-3 h-3" />;
    }
  };

  const formatMetricValue = (key: string, value: number) => {
    switch (key) {
      case "followers":
        return value >= 1000
          ? `${(value / 1000).toFixed(1)}k`
          : value.toString();
      case "engagement":
        return `${value}%`;
      case "age":
        return `${value}mo`;
      case "posts":
        return value >= 1000
          ? `${(value / 1000).toFixed(0)}k`
          : value.toString();
      default:
        return value.toString();
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "pending":
        return "bg-amber-500";
      default:
        return "bg-muted-foreground/40";
    }
  };

  // Get top 2 metrics for display
  const topMetrics = account.metrics
    ? Object.entries(account.metrics)
        .filter(([_, value]) => value !== undefined)
        .slice(0, 2)
    : [];
  return (
    <>
      <div
        className="w-80  rounded-2xl border border-border/50 hover:border-border hover:scale-101  hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Header */}
        <div className="p-5 pb-4 ">
          <div className="flex items-start justify-between mb-4 ">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-border/40"
                style={{ backgroundColor: `${platformColor}08` }}
              >
                {account.platform.logo ? (
                  <Image
                    src={account.platform.logo.asset.url}
                    alt={account.platform.name}
                    width={24}
                    height={24}
                    className="rounded-lg"
                  />
                ) : (
                  <Star className="w-5 h-5" style={{ color: platformColor }} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-tight  line-clamp-1">
                  {account.title}
                </h3>
                <p className="text-xs text-muted-foreground capitalize mt-0.5">
                  {account.category}
                </p>
              </div>
            </div>

            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusDot(account.status)}`}
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="text-2xl font-bold text-foreground">
              {formatCurrency(account.price)}
            </div>
          </div>

          {/* Compact Metrics */}
          {topMetrics.length > 0 && (
            <div className="flex items-center gap-4 mb-4 text-xs">
              {topMetrics.map(([key, value]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className="text-muted-foreground">
                    {getMetricIcon(key)}
                  </div>
                  <span className="font-semibold text-foreground">
                    {formatMetricValue(key, value as number)}
                  </span>
                  <span className="text-muted-foreground capitalize">
                    {key}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Features Preview */}
          {account.features.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-muted-foreground mb-2 font-medium">
                Features ({account.features.length})
              </div>
              <div className="flex flex-wrap gap-1.5">
                {account.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-muted/40 text-[11px] text-muted-foreground rounded-md border border-border/30 max-w-[120px] truncate"
                  >
                    {feature}
                  </span>
                ))}
                {account.features.length > 3 && (
                  <span className="inline-block px-2 py-1 bg-muted/40 text-[11px] text-muted-foreground rounded-md border border-border/30">
                    +{account.features.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-muted/10 border-t border-border/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${getStatusDot(account.status)}`}
              />
              <span className="text-xs text-muted-foreground capitalize font-medium">
                {account.status}
              </span>
            </div>

            <Link
              href={`/platforms/${account.platform.name.toLowerCase()}#inquiry-forms`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="sm"
                variant={account.status === "available" ? "default" : "outline"}
                disabled={account.status !== "available"}
                className="h-8 px-4 text-xs font-medium rounded-lg"
              >
                {account.status === "available" ? "Inquire" : "Sold"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Account Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${platformColor}15` }}
              >
                {account.platform.logo ? (
                  <Image
                    src={account.platform.logo.asset.url}
                    alt={account.platform.name}
                    width={20}
                    height={20}
                    className="rounded"
                  />
                ) : (
                  <Star className="w-4 h-4" style={{ color: platformColor }} />
                )}
              </div>
              {account.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Account Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Platform & Category */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                    Platform Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Platform:
                      </span>
                      <PlatformBadge
                        platformName={account.platform.name.split(" ")[0]}
                        size="sm"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Category:
                      </span>
                      <span className="text-sm font-medium capitalize">
                        {account.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Status:
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusDot(account.status)}`}
                        />
                        <span className="text-sm font-medium capitalize">
                          {account.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                    Pricing
                  </h3>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: platformColor }}
                  >
                    {formatCurrency(account.price)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    One-time purchase
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Account Metrics */}
                {account.metrics && Object.keys(account.metrics).length > 0 && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                      Account Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(account.metrics)
                        .filter(([_, value]) => value !== undefined)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex flex-col items-center text-center p-2 bg-background rounded-lg"
                          >
                            <div className="flex items-center gap-1 mb-1">
                              {getMetricIcon(key)}
                              <span className="text-xs text-muted-foreground capitalize">
                                {key}
                              </span>
                            </div>
                            <span className="font-bold text-lg">
                              {formatMetricValue(key, value as number)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Account Age */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                    Account Info
                  </h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      Created {new Date(account.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            {account.features.length > 0 && (
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                  Features & Benefits ({account.features.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {account.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Link
                href={`/platforms/${account.platform.name.toLowerCase()}#inquiry-forms`}
                className="flex-1"
              >
                <Button
                  className="w-full "
                  style={{
                    backgroundColor:
                      account.status === "available"
                        ? platformColor
                        : undefined,
                  }}
                  variant={
                    account.status === "available" ? "default" : "outline"
                  }
                  disabled={account.status !== "available"}
                  onClick={() => setIsModalOpen(false)}
                >
                  {account.status === "available" ? (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get This Account
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 mr-2" />
                      Not Available
                    </>
                  )}
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="sm:w-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
