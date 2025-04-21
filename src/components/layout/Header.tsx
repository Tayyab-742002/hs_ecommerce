import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="font-semibold text-xl">Your Brand</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/platforms" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Platforms
            </Link>
            <Link 
              href="/accounts" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Accounts
            </Link>
            <Link 
              href="/studio" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Studio
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}