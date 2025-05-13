import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { Button } from "@/components/ui/button";
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
  const platformColor = getPlatformColor(account.platform.name.toLowerCase());

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: `${platformColor}15` }}
          >
            {account.platform.logo ? (
              <Image
                src={account.platform.logo.asset.url}
                alt={account.platform.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <Star className="w-6 h-6" style={{ color: platformColor }} />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{account.title}</h3>
              <PlatformBadge
                platformName={account.platform.name}
                size="sm"
                variant="subtle"
                withName={false}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {account.category}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Price</span>
            <span className="font-semibold text-lg">
              {formatCurrency(account.price)}
            </span>
          </div>

          {/* Account Metrics */}
          {account.metrics && Object.keys(account.metrics).length > 0 && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
              {account.metrics.followers !== undefined && (
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">
                    Followers
                  </span>
                  <span className="text-xs font-medium">
                    {account.metrics.followers.toLocaleString()}
                  </span>
                </div>
              )}
              {account.metrics.engagement !== undefined && (
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">
                    Engagement
                  </span>
                  <span className="text-xs font-medium">
                    {account.metrics.engagement}%
                  </span>
                </div>
              )}
              {account.metrics.age !== undefined && (
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Age</span>
                  <span className="text-xs font-medium">
                    {account.metrics.age} months
                  </span>
                </div>
              )}
              {account.metrics.posts !== undefined && (
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Posts</span>
                  <span className="text-xs font-medium">
                    {account.metrics.posts}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        {account.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Features</h4>
            <ul className="space-y-1">
              {account.features.slice(0, 4).map((feature, index) => (
                <li
                  key={index}
                  className="text-xs text-muted-foreground flex items-start"
                >
                  <span className="mr-2 text-primary">✓</span>
                  {feature}
                </li>
              ))}
              {account.features.length > 4 && (
                <li className="text-xs text-muted-foreground">
                  + {account.features.length - 4} more
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Status and CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full mr-2 ${
                account.status === "available"
                  ? "bg-green-500"
                  : account.status === "pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            ></span>
            <span className="text-xs capitalize">{account.status}</span>
          </div>

          <Link
            href={`/platforms/${account.platform.name.toLowerCase()}#inquiry-forms`}
          >
            <Button
              size="sm"
              variant={account.status === "available" ? "default" : "outline"}
              disabled={account.status !== "available"}
            >
              {account.status === "available" ? "Inquire" : "Sold Out"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
