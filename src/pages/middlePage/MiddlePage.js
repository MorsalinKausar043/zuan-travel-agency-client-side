export default function Example() {

  const image1 = "https://i.ibb.co/SQrLsP5/images-5.jpg";
  const image2 = "https://i.ibb.co/SnGcq5w/images-21.jpg";
  const image3 = "https://i.ibb.co/jHP5DWg/images.jpg";
  const image4 = "https://i.ibb.co/NKP0s04/images-2.jpg";
  const image5 = "https://i.ibb.co/kQ3BQNP/download-4.jpg";
  const image6 = "https://i.ibb.co/wBsZxbp/download-3.jpg";
  const image7 = "https://i.ibb.co/MSvn43V/download-2.jpg";

    return (
      <div className="relative bg-white overflow-hidden my-4 my-12">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Hitchhiking through Bangladesh
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                The Hitchhiking through Pakistan entry, when you first landed on the page, you are already feeling the tense atmosphere of the video playing in the background, and the more you read through easily-digestible paragraphs, the more you want to see how it all went down. The Travel Episodes blog takes travel blogging into the realm of short stories like no other travel blogs I have seen.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src={image1}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image2}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image3}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image4}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image5}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image6}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src={image7}
                            alt="mini_banner_img"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }