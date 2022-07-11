import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/icons'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'

export default function Welcome() {
  return (
    <>
      <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <Image
            src={siteMetadata.image}
            alt="avatar"
            height={250}
            width={250}
            className="rounded-full"
          />
          <div className="flex space-x-3 pt-6 hover:text-primary-600 dark:hover:text-primary-400">
            <Icon kind="twitter" href={siteMetadata.twitter} />
            <Icon kind="linkedin" href={siteMetadata.linkedin} />
            <Icon kind="github" href={siteMetadata.github} />
          </div>
        </div>
        <div className=" prose pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <h1>Hey, I am Kirill</h1>

          <p>
            I am a product manager by day and self-taught developer and designer by night. Embracing
            being a generalist and aspiring to become a polymath.
          </p>
          <p>
            Currently experimenting with with life design and digital products. Feel free to learn
            more <Link href="/about">about me</Link>, ping me on{' '}
            <a href="https://twitter.com/sokirill">Twitter</a> or sign-up for my essays.
          </p>
        </div>
      </div>
    </>
  )
}
