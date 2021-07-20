import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-lg leading-7 text-gray-600 dark:text-gray-300">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </div>
            </dl>
            <div className="prose prose:dark-prose">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
        </header>

        <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
        <div className="pt-6 pb-6 text-xl text-gray-700 dark:text-gray-200">
          <Link href={discussUrl(slug)} rel="nofollow">
            {'Discuss on Twitter'}
          </Link>
        </div>
        <footer>
          <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
            {tags && (
              <div className="py-4 xl:py-8">
                <h2 className="prose uppercase dark:prose-dark">Tags</h2>
                <div className="tflex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
            {(next || prev) && (
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-xl text-gray-700 uppercase dark:text-gray-200">
                      Next Article
                    </h2>
                    <div className="text-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="pt-4 xl:pt-8">
            <Link
              href="/blog"
              className="text-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
