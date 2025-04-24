import { getPlatforms } from '@/lib/services/platforms'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60;

export default async function PlatformsPage() {
  const platforms = await getPlatforms()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Platforms</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => (
          <Link 
            key={platform._id}
            href={`/platforms/${platform.slug.current}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {platform.logo && (
              <div className="mb-4">
                <Image
                  src={platform.logo.asset.url}
                  alt={platform.name}
                  width={64}
                  height={64}
                  sizes="64px"
                  priority
                  className="rounded-full"
                />
              </div>
            )}
            
            <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
            
            <div className="space-y-2">
              {platform.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">•</span>
                  {feature.title}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}