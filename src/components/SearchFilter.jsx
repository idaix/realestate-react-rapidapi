import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Select } from "./"
const SearchFilter = () => {
  const [purpose, setPurpose] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    navigate(`/search?purpose=${purpose}`)
  }, [purpose])
  return (
    <div className='p-3 rounded bg-white flex gap-2 flex-wrap justify-center'>
      <Select title={'Purpuse'} />
      <Select title={'min price'} />
      <Select title={'max price'} />
    </div>
  )
}

export default SearchFilter