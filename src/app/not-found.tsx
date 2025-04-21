import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeIcon, ArrowLeft, HelpCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          {/* Visual error indicator */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: "3s" }}></div>
            <div className="relative flex items-center justify-center w-full h-full bg-primary rounded-full text-white">
              <span className="text-5xl font-bold">404</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gap-2">
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contact">
                <HelpCircle className="w-4 h-4" />
                Contact Support
              </Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <Link 
              href="/"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back to the homepage
            </Link>
          </div>
        </div>
      </div>
      
      {/* Simple footer */}
      <div className="py-6 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} H&S Ecommerce Agency. All rights reserved.
        </p>
      </div>
    </div>
  )
}
