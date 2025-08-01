/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

type Props = {
  params: { tool: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function StudioPage({ params, searchParams }: Props) {
  const { tool } = params;
  return <NextStudio config={config} />
}
