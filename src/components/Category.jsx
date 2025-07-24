import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    // const {categoryOnlyData} = getData()
    const navigate = useNavigate()
    const {data} = getData()

    const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]
      })
      newVal = [...new Set(newVal)]
      return newVal
    }


  
    const categoryOnlyData = getUniqueCategory(data, "category")
  
  return (
    <div className='bg-[#0f2027]'>
       <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-10 px-4'>
        {
            categoryOnlyData?.map((item, index)=>{
                return <div key={index}>
                    <button onClick={()=>navigate(`/category/${item}`)} className="uppercase bg-gradient-to-r bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 text-sm tracking-wide">{item}</button>
                </div>
            })
        }
       </div>
    </div>
  )
}

export default Category
