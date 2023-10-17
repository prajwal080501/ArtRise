import ArtContainer from "./ArtContainer"

const Featured = () => {
    return (
        <div
            className="
    max-w-[90%]
    mx-auto
    mt-10
    bg-gray-100
    mb-10
    rounded-lg
    px-5
    py-4
    "
        >
            <div>
                <p className="text-4xl font-extrabold">Featured</p>
            </div>
            <div>
                <ArtContainer />
            </div>
        </div>
    )
}

export default Featured