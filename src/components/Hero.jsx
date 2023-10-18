import video from "../assets/videobg.mp4";
const Hero = () => {
    return (
        <div className="relative h-screen isolate z-0 bg-white px-6 pt-14 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24">
                <div className="absolute inset-x-0 top-[50%] opacity-50 -z-10 transform-gpu overflow-hidden blur-3xl md:top-0">
                    <video src={video} autoPlay loop muted className="w-full h-auto" />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl tracking-normal font-bold  text-gray-900 sm:text-6xl">
                        Unleash Your Inner Artist: <span className='text-pink-700'>
                            Where Creativity Finds its Canvas
                        </span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                        commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-2">
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Explore
                        </button>
                        <button
                            type="button"
                            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;