import { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'

export const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) {
        return null
      }
      return (
        <div className="my-6 relative">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            width={800}
            height={500}
            className="rounded-lg mx-auto"
            style={{ objectFit: 'cover' }}
          />
          {value.caption && (
            <div className="text-center text-sm text-muted-foreground mt-2">
              {value.caption}
            </div>
          )}
        </div>
      )
    },
  },
}