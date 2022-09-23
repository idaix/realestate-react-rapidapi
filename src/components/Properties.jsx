import { Loader, PropertyCard } from '../components'
const Properties = ({ title, data }) => {
  return (
    <div className='bg-slate-100 rounded p-3'>
        <h2 className="text-2xl font-bold pb-3">{title}</h2>
        {data.length?(
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {data.map(item=>(
                    <PropertyCard {...item} key={item.id} />
                ))}
            </div>
        ):(
            <div className="flex justify-center py-5">
                <Loader />
            </div>
        )}
    </div>
  )
}

export default Properties