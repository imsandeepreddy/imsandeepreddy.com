import Image from './Image'

const SocialLink = ({ title, text, imgSrc, href }) => (
  <div className="flex flex-wrap w-full cursor-pointer items-center border rounded-md hover:border-primary-500">
    <Image className="ml-5" alt={title} src={imgSrc} width={75} height={75} href={href} />
    <div className="flex items-center justify-center py-10">
      <p className="flex items-center prose dark:prose-dark pl-10">{text}</p>
    </div>
  </div>
)

export default SocialLink
