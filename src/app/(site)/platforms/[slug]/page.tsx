import { getPlatformBySlug } from '@/lib/services/platforms'
import { getAccountsByPlatform } from '@/lib/services/accounts'
import { AccountCard } from '@/components/accounts/AccountCard'
import Image from 'next/image'

export default async function PlatformPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const platform = await getPlatformBySlug(slug)
  const accounts = await getAccountsByPlatform(platform._id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          {platform.logo && (
            <Image
              src={platform.logo.asset.url}
              alt={platform.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <h1 className="text-4xl font-bold">{platform.name}</h1>
        </div>

        {platform.banner && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={platform.banner.asset.url}
              alt={`${platform.name} banner`}
              width={1200}
              height={400}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {platform.features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              {feature.icon && (
                <Image
                  src={feature.icon.asset.url}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Account Types</h2>
          <div className="flex gap-4">
            {platform.accountCategories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add accounts section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Available {platform.name} Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account._id} account={account} />
          ))}
        </div>
      </div>
    </div>
  )
}
