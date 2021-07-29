import Icon from '@/components/icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="prose dark:prose-dark pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-center">About</h1>
        </div>
        <div className="items-start prose dark:prose-dark space-y-2">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
