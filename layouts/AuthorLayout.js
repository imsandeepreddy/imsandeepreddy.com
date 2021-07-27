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
        <div className="items-start prose dark:prose-dark space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="200px"
              height="200px"
              className="w-30 h-30 rounded-full"
            />
            <h3>{name}</h3>
            <div>{occupation}</div>
            <div>{company}</div>
            <div className="flex pt-2 space-x-3">
              <Icon kind="github" href={github} />
              <Icon kind="linkedin" href={linkedin} />
              <Icon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
