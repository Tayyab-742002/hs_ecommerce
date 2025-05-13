import { getAccounts } from "@/lib/services/accounts";
import { AccountCard } from "@/components/accounts/AccountCard";
import { Account } from "@/lib/fallback-data";

export const revalidate = 60;

export default async function AccountsPage() {
  const accounts = await getAccounts({ useFallback: true });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Accounts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account: Account) => (
            <AccountCard key={account._id} account={account} />
          ))}
        </div>
      </div>
    </div>
  );
}
