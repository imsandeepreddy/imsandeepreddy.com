import Image from './Image'
import Link from './Link'

const SocialLink = ({ title, description, imgSrc, href }) => (
  <div className="container mx-auto box-border cursor-pointer">
    <div className="flex justify-between space-x-1 border hover:text-blue-500 hover:border-blue-500">
      <Link href={href} aria-label={`Link to ${title}`}>
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center"
          width={100}
          height={100}
          objectFit="contain"
        />
      </Link>
      <div className="p-6">
        <h2 className="mb-3 font-serif font-bold">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose dark:prose-dark max-w-none">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-lg font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default SocialLink
