import ExploreBannerCard from './ExploreBannerCard'

import BuyImage from '../../assets/buy.webp'
import RentImage from '../../assets/rent.png'

const ExploreBanner = () => {
  return (
    <div className='grid gap-5 md:grid-cols-2 bg-slate-100 p-3 rounded'>
      <ExploreBannerCard image={RentImage} title="Rental Homes For Everyone" btnLabel="Explore Renting" link="for-rent" />
      <ExploreBannerCard image={BuyImage} title="Find, Buy & Own Your Dream Home" btnLabel="Explore Buying" link="for-sale" />
    </div>
  )
}

export default ExploreBanner