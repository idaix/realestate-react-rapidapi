import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../'

const ExploreBannerCard = ({ image, title, btnLabel, link }) => {
  return (
    <div className='rounded overflow-hidden'>
        <figure className='w-full md:h-52 xl:h-64 overflow-hidden'>
            <img src={image} alt={title} className="w-full h-full object-cover " />
        </figure>
        <div className="p-3">
          <h2 className="text-xl font-bold my-3">{title}</h2>
          <Button css='bg-primary text-white'>
              <Link to={`search/${link}`}>{btnLabel}</Link>
          </Button>
        </div>
    </div>
  )
}

export default ExploreBannerCard