import { useState, useEffect } from 'react'
import { ExploreBanner, Properties, Section } from '../components'
import { fetchProperties } from '../utils/fetchApi'

const Home = () => {

    const [propertiesForRent, setPropertiesForRent] = useState([])
    const [propertiesForsale, setPropertiesForsale] = useState([])
    
    useEffect(()=>{
      const fetchDataFromApi = async () => {
        const propertiesForRentData = await fetchProperties('list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6').then(data=> data.hits)
        const propertiesForSaleData = await fetchProperties('list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6').then(data=> data.hits)
        setPropertiesForRent(propertiesForRentData)
        setPropertiesForsale(propertiesForSaleData)
      }
      fetchDataFromApi()
    }, [])


    return (
      <>
        <Section>
          <ExploreBanner />
        </Section>
        <Section>
          <Properties title='Properties For Rent' data={propertiesForRent} />
        </Section>
        <Section>
          <Properties title='Properties For Sale' data={propertiesForsale} />
        </Section>
      </>
    )
}

export default Home