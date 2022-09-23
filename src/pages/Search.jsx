import { useEffect, useState, useMemo } from "react"
import { useLocation } from "react-router-dom"
import { Properties, SearchFilter, Section } from "../components"
import { fetchProperties } from "../utils/fetchApi"



// get from url 
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}



const Search = () => {

  let query = useQuery();
  
  
  const [searchResult, setSearchResult] = useState([])
  // filters
  
  const purpose = query.get("purpose") || 'for-rent'
  const locationExternalIDs = query.get("locationExternalIDs") || '5002'
  const categoryExternalID = query.get("categoryExternalID") || '5002'
  const rentFrequency = query.get("rentFrequency") || 'monthly'
  const minPrice = query.get("minPrice") || '0'
  const maxPrice = query.get("maxPrice") || '1000000'
  const roomsMin = query.get("roomsMin") || '0'
  const bathsMin = query.get("bathsMin") || '0'
  
  useEffect(() => {
    setSearchResult([])
    const fetchData = async () => {
        const searchResultData = await fetchProperties(`list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&roomsMin=${roomsMin}&bathsMin=${bathsMin}`).then(data=>data.hits)
        setSearchResult(searchResultData)
    }

    fetchData()
  }, [query])
  console.log(searchResult);

  return (
    <div>
      <Section>
        <SearchFilter />
      </Section>
      <Section>
        <Properties title='Properties' data={searchResult} />
      </Section>
    </div>
  )
}

export default Search