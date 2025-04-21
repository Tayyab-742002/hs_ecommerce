import Image from 'next/image'
import { Account } from '@/lib/fallback-data/accounts'

export function AccountCard({ account }: { account: Account }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {account.platform.logo && (
            <Image
              src={account.platform.logo.asset.url}
              alt={account.platform.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <h3 className="font-semibold">{account.platform.name}</h3>
            <span className="text-sm text-gray-500 capitalize">{account.category}</span>
          </div>
        </div>

        {account.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {account.metrics.followers && (
              <div>
                <span className="text-sm text-gray-500">Followers</span>
                <p className="font-semibold">{account.metrics.followers.toLocaleString()}</p>
              </div>
            )}
            {account.metrics.engagement && (
              <div>
                <span className="text-sm text-gray-500">Engagement</span>
                <p className="font-semibold">{account.metrics.engagement}%</p>
              </div>
            )}
            {account.metrics.posts && (
              <div>
                <span className="text-sm text-gray-500">Posts</span>
                <p className="font-semibold">{account.metrics.posts}</p>
              </div>
            )}
            {account.metrics.age && (
              <div>
                <span className="text-sm text-gray-500">Age</span>
                <p className="font-semibold">{account.metrics.age} years</p>
              </div>
            )}
          </div>
        )}

        <ul className="space-y-2 mb-4">
          {account.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${account.price}</span>
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${account.status === 'available' ? 'bg-green-100 text-green-800' : 
              account.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'}
          `}>
            {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  )
}