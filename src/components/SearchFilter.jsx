import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Select } from "./"
const SearchFilter = () => {
  const [purpose, setPurpose] = useState('')
  const [rentFrequency, setRentFrequency] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    navigate(`/search?purpose=${purpose}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
  }, [purpose, rentFrequency, minPrice, maxPrice])
  return (
    <div className='p-3 rounded bg-white flex gap-2 flex-wrap justify-center'>
      <Select label={'Purpuse'} onChange={(e)=>setPurpose(e.target.value)}>
        <option value="for-rent">For Rent</option>
        <option value="for-sale">For Sale</option>
      </Select>
      <Select label={'Rent Frequency'} onChange={(e)=>setRentFrequency(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </Select>
      <Select label={'Min Price'} onChange={(e)=>setMinPrice(e.target.value)}>
        <option value="10000">10,000</option>
        <option value="20000">20,000</option>
      </Select>
      <Select label={'Max Price'} onChange={(e)=>setMaxPrice(e.target.value)}>
        <option value="50000">50,000</option>
        <option value="110000">110,000</option>
      </Select>
    </div>
  )
}

export default SearchFilter