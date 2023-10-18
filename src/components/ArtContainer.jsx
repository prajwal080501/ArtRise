import { data } from "../data/data";
import Card from "./Card"

const ArtContainer = () => {
    return (
        <div className=" mt-5 flex items-center justify-center  w-full space-x-6  px-5 py-6">
            {
                // display first four art pieces
                data.slice(0, 4).map((art) => (
                    <Card
                        key={art.id}
                        title={art.title}
                        imageUrl={art.imageUrl}
                        artist={art.artist}
                        price={art.price}
                        tags={art.tags}
                        description={art.description}
                    />
                ))
            }
        </div>
    )
}

export default ArtContainer;