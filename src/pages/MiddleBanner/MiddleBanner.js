import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'I signed my will and got approved for a mortgage. It was a big week for adulting. I never felt more part of the system than when I had to sign all those papers.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'As a member of Nomadic Matt Plus, you not only get tons of perks to make your travels cheaper but you help us keep creating the in-depth travel content you love!',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Members also get free books, guidebooks, blogging courses, access to our events, event replays, monthly giveaways, t-shirts, exclusive money-saving travel discounts, and more!',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'This article is exclusively for members of Nomadic Matt Plus! NM+ is our member only program that gives readers like yourself access to bonus blog posts. ',
    icon: AnnotationIcon,
  },
]

const MiddleBanner = () => {

  return (
    <div className="pt-12 pb-20 md:pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default MiddleBanner;