import siteMetadata from '@/data/siteMetadata'
import socialLinkData from '@/data/socialLinkData'
import { PageSeo } from '@/components/SEO'
import SocialLink from '@/components/SocialLink'

export default function SocialLinks() {
  return (
    <>
      <PageSeo
        title={`Social Links - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-3">
        <div className="prose dark:prose-dark text-center pt-6 pb-8 space-y-2 md:space-y-5">
          <h1>Projects</h1>
          <p>A list of projects I have been working on</p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {socialLinkData.map((d) => (
              <SocialLink
                key={d.title}
                title={d.title}
                text={d.text}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
