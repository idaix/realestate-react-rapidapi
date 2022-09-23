import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Properties, Section } from "../components"
import { fetchProperties } from "../utils/fetchApi"

const Search = () => {

  const [searchResult, setSearchResult] = useState([])
  const { query } = useParams()
  
  useEffect(() => {
    const fetchData = async () => {
      if (query === 'properties'){
        const searchResultData = await fetchProperties(`list?locationExternalIDs=5002`).then(data=>data.hits)
        setSearchResult(searchResultData)
      }else{
        const searchResultData = await fetchProperties(`list?locationExternalIDs=5002&purpose=${query}`).then(data=>data.hits)
        setSearchResult(searchResultData)
      }
    }

    fetchData()
  }, [query])
  console.log(searchResult);

  return (
    <div>
      
      <Section>
        <Properties title='Properties' data={searchResult} />
      </Section>
    </div>
  )
}

export default Search