import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProperties } from "../utils/fetchApi"
import { Badge, Section } from '../components'
// swiper import and config
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { TbBed } from "react-icons/tb";
import { MdOutlineBathtub } from "react-icons/md";
import { BsBoundingBoxCircles, BsPhone, BsTelephone, BsWhatsapp } from "react-icons/bs";
import millify from "millify";
import { GoVerified } from "react-icons/go";



const PropertyDetail = () => {
  const { id } = useParams()
  const [propertyDetail, setPropertyDetail] = useState([])


  useEffect(()=>  {
    const fetchData = async () => {
      const propertyDetailData = await fetchProperties(`detail?externalID=${id}`).then(data=>data)
      setPropertyDetail(propertyDetailData)
    }

    fetchData()
  }, [id])

  const { price, product, title, description, rooms, baths, category, amenities, score, area, photos, rentFrequency, isVerified, contactName, purpose, phoneNumber, agency, type } = propertyDetail
  return (
    <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <Section>
            {photos?(
              <Swiper
                className="rounded overflow-hidden"
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
              >
                {photos.map(image=>(
                  <SwiperSlide key={image.id}>
                    <img src={image.url} alt={image.title} className="w-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ):(
              <h1 className="text-center">No images!</h1>
            )}
          </Section>
          <Section>
              <div className="bg-white rounded p-3">
                <div className="flex-1 flex gap-1 items-center text-xl">
                    {isVerified&&(
                        <GoVerified className='text-primary' />
                    )}
                    <h3 className='font-semibold'>AED {price} <span className="text-base">{rentFrequency&& `/ ${rentFrequency}`}</span></h3>
                </div>

                <div className="flex items-center gap-2 my-2">
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< TbBed className='text-lg'/> {rooms} Rooms</Badge>
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< MdOutlineBathtub className='text-lg'/> {baths} Baths </Badge>
                    <Badge css='bg-primary-light text-primary flex items-center gap-1'>< BsBoundingBoxCircles className='text-lg'/> {millify(area)} Sq Ft</Badge>
                </div>
                <h3 className="text-lg">{title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{description}</p>
                <div className="flex items-center gap-5 my-2 font-semibold flex-wrap">
                    <div>Type <Badge css='bg-primary-light text-primary'>{type}</Badge></div>
                    <div>Purpose <Badge css='bg-primary-light text-primary'>{purpose}</Badge></div>
                    <div>Product <Badge css='bg-primary-light text-primary'>{product}</Badge></div>
                    <div>Score <Badge css='bg-primary-light text-primary'>{score}</Badge></div>
                </div>
              </div>
          </Section>
          <Section>
            <div className="bg-white rounded p-3">
                {category&&(
                  <>
                    <h1 className="text-lg font-semibold">Categories</h1>
                    <div className="flex items-center gap-2 my-2 font-semibold flex-wrap">
                        {category.map(categ=>(
                          <Badge key={categ.id} css='bg-slate-100 text-slate-500'>{categ.name}</Badge>
                        ))}
                        
                    </div>
                  </>
                )}
                {amenities&&(
                  <>
                    <h1 className="text-lg font-semibold">Facilities</h1>
                    <div className="flex items-center gap-2 my-2 font-semibold flex-wrap">
                        {amenities.map(item=>(
                          <Badge key={item.text} css='bg-slate-100 text-slate-500'>{item.text}</Badge>
                        ))}
                        
                    </div>
                  </>
                )}
            </div>
          </Section>
        </div>
        <div className="md:col-span-1">
          <Section>
            <div className="bg-white p-3 rounded">
              <h2 className="font-semibold text-lg">Agency Informations</h2>
              <div className="text-center">
                <img src={agency?.logo?.url} className="w-32 h-32 object-cover rounded-full mx-auto" alt={agency?.name} />
                <h3 className="font-bold">{agency?.name}</h3>
              </div>
              <hr className="my-2" />
              <h5 className="font-semibold">Contact</h5>
              <ul className="text-gray-500 text-sm">
                {phoneNumber?.mobile&&(<li className="flex items-center">
                  <BsPhone className='w-10' />
                  {phoneNumber?.mobile}
                </li>)}
                {phoneNumber?.phone&&(<li className="flex items-center">
                  <BsTelephone className='w-10' />
                  {phoneNumber?.phone}
                </li>)}
                {phoneNumber?.whatsapp&&(<li className="flex items-center">
                  <BsWhatsapp className='w-10' />
                  {phoneNumber?.whatsapp}
                </li>)}
              </ul>
            </div>
          </Section>
        </div>
    </div>
  )
}

export default PropertyDetail