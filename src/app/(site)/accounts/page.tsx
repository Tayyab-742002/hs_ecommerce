import { getAccounts } from "@/lib/services/accounts";
import { AccountCard } from "@/components/accounts/AccountCard";
import { Account } from "@/types";

import { Users } from "lucide-react";
import { TopHeader } from "@/components/common/TopHeader";

export const revalidate = 60;

export default async function AccountsPage() {
  const accounts = await getAccounts({ useFallback: true });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <TopHeader
          title={{
            main: "Available Accounts",
            subtitle: "Find the perfect account for your needs",
          }}
          description={{
            text: "Find the perfect account for your needs {highlight1}",
            highlights: [{ text: "accounts", color: "primary" }],
          }}
          badge={{
            icon: Users,
            text: "Available Accounts",
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {accounts.map((account: any) => (
            <AccountCard
              key={account._id}
              account={{
                ...account,
                title: account.title || `${account.platform.name} Account`,
                platform: {
                  _ref: account.platform._id,
                  name: account.platform.name,
                  logo: account.platform.logo,
                },
                category: account.category || "standard",
                price:
                  typeof account.price === "string"
                    ? parseFloat(account.price) || 0
                    : account.price || 0,
                features: account.features || [],
                status: account.status || "available",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
