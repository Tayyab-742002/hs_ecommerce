import { getPlatformBySlug } from '@/lib/services/platforms'
import { getAccountsByPlatform } from '@/lib/services/accounts'
import { getReinstatementServicesByPlatform } from '@/lib/services/reinstatement'
import { AccountCard } from '@/components/accounts/AccountCard'
import { PriceInquiryForm } from '@/components/accounts/PriceInquiryForm'
import { RequirementsForm } from '@/components/accounts/RequirementsForm'
import { VAServiceCard } from '@/components/services/VAServiceCard'
import { ReinstatementCard } from '@/components/services/ReinstatementCard'
import { PageHeader } from '@/components/layout/PageHeader'
import Image from 'next/image'

export default async function PlatformPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const platform = await getPlatformBySlug(slug)
  const accounts = await getAccountsByPlatform(platform._id)
  const reinstatementServices = await getReinstatementServicesByPlatform(platform._id)

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <PageHeader
        title={platform.name}
        description={`Professional seller and buyer accounts plus services for ${platform.name}`}
        size="lg"
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      >
        {platform.logo && (
          <div className="flex items-center gap-4 mt-6">
            <Image
              src={platform.logo.asset.url}
              alt={platform.name}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        )}
      </PageHeader>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Platform Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {platform.features.map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
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
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Account Categories */}
        {platform.accountCategories && platform.accountCategories.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Available Account Types</h2>
            <div className="flex flex-wrap gap-4">
              {platform.accountCategories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Available Accounts Section */}
        {accounts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Available {platform.name} Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accounts.map((account) => (
                <AccountCard key={account._id} account={account} />
              ))}
            </div>
          </div>
        )}

        {/* Virtual Assistant Services Section */}
        {platform.vaServices && platform.vaServices.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">{platform.name} Virtual Assistant Services</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional services to help you manage and grow your {platform.name} business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platform.vaServices.map((service, index) => (
                <VAServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* Account Reinstatement Services */}
        {reinstatementServices.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">{platform.name} Account Reinstatement Services</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get your suspended or blocked {platform.name} account reinstated with our specialized services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reinstatementServices.map((service) => (
                <ReinstatementCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* Inquiry Forms Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Price Inquiry Form */}
          <div>
            <PriceInquiryForm platformName={platform.name} />
          </div>

          {/* Requirements Form */}
          <div>
            <RequirementsForm 
              platformName={platform.name} 
              fields={platform.accountRequirementFields || []}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 mb-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Us Directly</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
