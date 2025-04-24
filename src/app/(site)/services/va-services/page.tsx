import { getPlatforms } from '@/lib/services/platforms'
import { VAServiceCard } from '@/components/services/VAServiceCard'
import Image from 'next/image'
import Link from 'next/link'

interface VAService {
  title: string
  description: string
  price: string
  icon?: {
    asset: {
      url: string
    }
  }
}

interface Platform {
  _id: string
  name: string
  slug: string
  logo?: {
    asset: {
      url: string
    }
  }
  vaServices?: VAService[]
}

export const revalidate = 60;

export default async function VAServicesPage() {
  const platforms : Platform[] = await getPlatforms()
  const platformsWithServices = platforms.filter(p => p.vaServices && p.vaServices.length > 0)

  // Define common VA services if no platform has services defined yet
  const commonVAServices = [
    {
      title: "Listing Optimization",
      description: "Professional optimization of your product listings to improve visibility and conversion rates.",
      price: "Starting at $25/listing",
      icon: null
    },
    {
      title: "Account Management",
      description: "Complete management of your seller account including daily maintenance and performance monitoring.",
      price: "From $350/month",
      icon: null
    },
    {
      title: "Customer Service",
      description: "Responsive customer support to handle inquiries, returns, and maintain high ratings.",
      price: "From $250/month",
      icon: null
    },
    {
      title: "PPC Campaign Management",
      description: "Strategic management of advertising campaigns to maximize ROI and sales.",
      price: "From $200/month",
      icon: null
    },
    {
      title: "Product Research",
      description: "In-depth market research to identify profitable products and niches.",
      price: "$150 per report",
      icon: null
    },
    {
      title: "Competitor Analysis",
      description: "Detailed analysis of competitors' strategies, pricing, and performance.",
      price: "$120 per analysis",
      icon: null
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Assistant Services</h1>
        <p className="text-xl text-gray-600">
          Professional e-commerce virtual assistants to help manage and grow your online business
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-12 bg-card p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our VA Services?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Experienced Specialists</h3>
              <p className="text-gray-600">Our VAs have platform-specific expertise and training</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Cost-Effective</h3>
              <p className="text-gray-600">Significantly lower than hiring full-time staff</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Flexible Solutions</h3>
              <p className="text-gray-600">Scale up or down based on your business needs</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Time-Saving</h3>
              <p className="text-gray-600">Focus on strategy while we handle the operations</p>
            </div>
          </div>
        </div>
      </div>

      {platformsWithServices.length > 0 ? (
        <>
          {platformsWithServices.map((platform) => (
            <div key={platform._id} className="mb-16">
              <div className="flex items-center mb-6">
                {platform.logo && (
                  <Image
                    src={platform.logo.asset.url}
                    alt={platform.name}
                    width={50}
                    height={50}
                    className="mr-3"
                  />
                )}
                <h2 className="text-2xl font-bold">{platform.name} VA Services</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platform.vaServices?.map((service: VAService, index: number) => (
                  <VAServiceCard key={index} service={service} />
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href={`/platforms/${platform.slug}`}
                  className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  View all {platform.name} services
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        // Fallback content if no platform has VA services yet
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Virtual Assistant Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonVAServices.map((service, index) => (
              <VAServiceCard key={index} service={{...service, icon: undefined}} />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-16 p-8 bg-primary/5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Custom VA Service Packages</h2>
        <p className="text-gray-600 mb-6 text-center">
          Need a specialized VA service not listed here? We can create custom packages tailored to your specific business needs.
        </p>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/923010510316"
              className="flex items-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +92 301 0510316 (WhatsApp)
            </a>

            <a
              href="tel:+447955426807"
              className="flex items-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +44 7955 426807
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
