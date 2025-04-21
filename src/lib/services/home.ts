import { fetchWithFallback } from '../utils/fetch-data'

const fallbackHomeData = {
  hero: {
    heading: "Your Gateway to E-commerce Success",
    subheading: "Professional services for Amazon, eBay, Walmart, TikTok, and Etsy sellers",
    backgroundImage: null,
    cta: {
      text: "Get Started",
      link: "/contact"
    },
    overlay: {
      enabled: true,
      opacity: 0.5
    }
  }
}

export async function getHomePageData(options = { useFallback: false }) {
  const query = `
    *[_type == "page" && slug.current == "home"][0] {
      hero {
        heading,
        subheading,
        backgroundImage {
          asset-> {
            url
          }
        },
        cta {
          text,
          link
        },
        overlay {
          enabled,
          opacity
        }
      }
    }
  `

  return fetchWithFallback(query, fallbackHomeData, options)
}
