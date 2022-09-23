import { Link } from 'react-router-dom'
import { Badge } from '../components'
import { MdOutlineBathtub } from 'react-icons/md'
import { TbBed } from 'react-icons/tb'
import { GoVerified } from 'react-icons/go'
import { BsBoundingBoxCircles } from 'react-icons/bs'
import millify from 'millify'
const PropertyCard = ({ title, rooms, price, isVerified, baths, agency, coverPhoto, externalID, rentFrequency, area }) => {
  return (
    <Link to={`/property/${externalID}`}>
        <div className='rounded bg-white hover:bg-primary-light duration-300 overflow-hidden'>
            <figure className="w-full md:h-44 xl:h-60 overflow-hidden">
                <img src={coverPhoto?.url} alt={title} loading="lazy" className='w-full object-cover' />
            </figure>
            <div className='p-2'>
                <div className="flex items-center">
                    <div className="flex-1 flex gap-1 items-center">
                        {isVerified&&(
                            <GoVerified className='text-primary' />
                        )}
                        <h3 className='text-lg font-semibold'>AED {price} {rentFrequency&& `/ ${rentFrequency}`}</h3>
                    </div>
                    <div className='overflow-hidden w-12 h-12 rounded-full'>
                        <img src={agency?.logo?.url} alt={agency.name} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className="flex items-center gap-2 my-2">
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< TbBed className='text-lg'/> {rooms} Rooms</Badge>
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< MdOutlineBathtub className='text-lg'/> {baths} Baths </Badge>
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< BsBoundingBoxCircles className='text-lg'/> {millify(area)} sqft</Badge>
                </div>
                    
                <p>{title.length > 30 ? title.substring(0, 30) + '...' : title}</p>
            </div>
        </div>
    </Link>
  )
}

export default PropertyCard