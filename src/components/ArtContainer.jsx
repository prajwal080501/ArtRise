import { Link } from "react-router-dom";
import { data } from "../data/data";
import Card from "./Card"

const ArtContainer = () => {
    return (
        <div className=" mt-5 flex items-center justify-center  w-full space-x-6  px-5 py-6">
            {
                // display first four art pieces
                data.slice(0, 4).map((art) => (
                    <Link key={art.id} to={`/art/${art.id}`}>
                        <Card
                            title={art.title}
                            data = {art}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default ArtContainer;