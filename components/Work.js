import Icon from '@/components/icons'

export default function Work() {
  return (
    <>
      <div className="pb-5 pt-5">
        <div>
          <h1 className="text-center ">Things I do</h1>
        </div>
        <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
          <div>
            <h3>Discovery</h3>
            <p>Create and validate product hypothesis + potential affinity</p>
          </div>
          <div>
            <h3>Product</h3>
            <p>Plan, orchestrate and execute product strategy and delivery</p>
          </div>
          <div>
            <h3>Growth</h3>
            <p>Acquire, activate, retain and increase LTV of customers</p>
          </div>
          <div>
            <h3>Go-to-market</h3>
            <p>Blueprinting product launch to target customers and geos</p>
          </div>
          <div>
            <h3>Automation</h3>
            <p>Integrate workflows and automation of tedious and repeatable tasks</p>
          </div>
          <div className="">
            <h3>MVP</h3>
            <p>Build and deploy lean and functional prototypes</p>
          </div>
        </div>
      </div>
    </>
  )
}
