import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'

export default function Work() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-center ">
          <RoughNotation
            animate="true"
            animationDelay="1000"
            animationDuration="4000"
            type="box"
            color="#0ea4e9"
            show={true}
            strokeWidth="3"
          >
            Clients I worked with{' '}
          </RoughNotation>
        </h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center justify-center">
        <div>
          <Image
            src="/static/img/work/skyscanner.svg"
            alt="Skyscanner"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/king.svg"
            alt="King"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div className="py-2 max-w-none">
          <Image
            src="/static/img/work/spotify.svg"
            alt="Spotify"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/grab.svg"
            alt="Grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/carousell.svg"
            alt="Carousell"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/carousell-dark.svg"
            alt="Carousell"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src="/static/img/work/line.svg"
            alt="Line"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/amazon.svg"
            alt="Amazon"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/amazon-dark.svg"
            alt="Amazon"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/cbs.svg"
            alt="CBS"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/cbs-dark.svg"
            alt="CBS"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/playrix.svg"
            alt="Playrix"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/rocket-internet.svg"
            alt="Rocket internet"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/rocket-internet-dark.svg"
            alt="Rocket internet"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/twitter.svg"
            alt="Twitter"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/delivery-hero.svg"
            alt="Delivery Hero"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/bytedance.svg"
            alt="ByteDance"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/moonton.svg"
            alt="Moonton"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/moonton-dark.svg"
            alt="Moonton"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/nexon.svg"
            alt="Nexon"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/nexon-dark.svg"
            alt="Nexon"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="block dark:hidden">
          <Image
            src="/static/img/work/global-fashion-group.svg"
            alt="Global fashion group"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/global-fashion-group-dark.svg"
            alt="Global fashion group"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
