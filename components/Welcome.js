import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/icons'
import Image from 'next/image'

export default function Welcome() {
  return (
    <>
      <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={siteMetadata.image}
            alt="avatar"
            height={250}
            width={250}
            className="rounded-full"
          />
          <div className="flex pt-6 space-x-3 hover:text-primary-600 dark:hover:text-primary-400">
            <Icon kind="twitter" href={siteMetadata.twitter} />
            <Icon kind="linkedin" href={siteMetadata.linkedin} />
            <Icon kind="github" href={siteMetadata.github} />
          </div>
        </div>
        <div className="prose dark:prose-dark pt-8 pb-8 max-w-none xl:col-span-2">
          <h1>Hey, I am Kirill</h1>
          <p>
            I'm a product and growth executive, writer and aspiring polymath based in Singapore.
          </p>
          <p>
            Currently I am working on a critical-thinking guide and tinkering with SaaS projects
            whilst learning Next.js, Tailwind and Prisma. I also share articles on emerging
            technology and future of work.
          </p>
        </div>
      </div>
    </>
  )
}
