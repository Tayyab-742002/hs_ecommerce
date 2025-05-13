import { getAccounts } from "@/lib/services/accounts";
import { AccountCard } from "@/components/accounts/AccountCard";
import { Account } from "@/types";

export const revalidate = 60;

export default async function AccountsPage() {
  const accounts = await getAccounts({ useFallback: true });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Accounts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
