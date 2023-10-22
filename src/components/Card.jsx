import { ArrowUpRight } from 'lucide-react'
import PropTypes from 'prop-types'

const Card = ({data}) => {
  const {title, imageUrl, artist, tags, price, description} = data;
    return (
        <div className="w-[300px] hover:scale-105 duration-200 ease-linear hover:opacity-90 cursor-pointer h-auto drop-shadow-lg rounded-md border bg-white">
        <img
          src={imageUrl}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex font-bold items-center text-lg">
            {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {
                description?.length > 100 ? description?.slice(0, 50) + "..." : description
            }
          </p>
          <div className="mt-4">
            {
                tags?.map((tag) => (
                    <span key={tag} className="mb-2 mr-2 inline-block rounded-full  px-3 bg-gray-100 p-3 py-1 text-[10px] font-semibold text-gray-900">
                        #{tag}
                    </span>
                ))
            }
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            ${price}
          </button>
        </div>
      </div>
    )
}


Card.propTypes = {
  data: PropTypes.object.isRequired
}
export default Card;