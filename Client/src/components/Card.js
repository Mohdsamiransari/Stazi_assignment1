import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {GoPeople} from 'react-icons/go'
import {LiaGasPumpSolid} from 'react-icons/lia'
import {BsSpeedometer} from 'react-icons/bs'
import {GiSteeringWheel} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import { Urls } from '../Urls'

export const Card = ({search}) => {
    const [datas, setdata] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;   

    console.log(search)
    useEffect(()=>{
        const fetchdata = async()=>{
            let url = `${Urls}cardetail?page=${currentPage}`;
            if(search){

                url += `&search=${search}`;
                
            }
            await axios.get(url)
            .then((response)=>response)
            .then((data)=>setdata(data.data.data))
        }
        fetchdata() 
    },[currentPage,search])

    const totalPages = Math.ceil(datas.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };
    
  return (
    <section className='basis-full flex flex-col gap-10'>
        <div className=' grid grid-cols-3 gap-4'>
            {datas.map((id)=>(
                
        
                <div className='bg-[#e5eaf4] p-2 rounded-xl' key={id._id}>
                    
                        <img src={id.image}  className='rounded-lg object-cover w-full h-[20vw]' alt='car'/>
                
                    <div className='px-2 w-full flex flex-col gap-4 mt-4'>
                        <div className='flex flex-row items-center justify-between'>
                            <h2 className='text-lg font-semibold'>{id.name}</h2>
                            <p className='rounded-2xl  border-[#6786a7] border-dashed border-2 px-2 text-sm '>{id.year}</p>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-2 text-gray-700'>
                            <div className='items-center justify-start flex gap-2'>
                                <i><GoPeople className='text-[#4899EC]'/></i>
                                <p>{id.seatingCapacity} People</p>
                            </div>
                            <div className='items-center justify-start flex gap-2'>
                                <i><LiaGasPumpSolid className='text-[#4899EC]'/></i>
                                <p>{id.fuel}</p>
                            </div>
                            <div className='items-center justify-start flex gap-2'>
                                <i><BsSpeedometer className='text-[#4899EC]'/></i>
                                <p>{id.milage}km/ 1-litre</p>
                            </div>
                            <div className='items-center justify-start flex gap-2'>
                                <i><GiSteeringWheel className='text-[#4899EC]'/></i>
                                <p>{id.transmissionType}</p>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#89a1bb]'/>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='text-lg font-semibold'>${id.price} <span className='text-sm font-normal'>/month</span> </h2>
                            <div className='flex justify-between items-center'>
                                <button className='px-3 py-2 bg-[#c0dcf9] rounded-lg'><AiOutlineHeart className='text-[#4899EC]'/></button>
                                <button className='px-3 py-1 bg-[#4899EC] rounded-lg ml-4'>Rent now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
            <div className='w-full bg-[#e5eaf4] basis-16 rounded-2xl flex flex-row justify-between items-center px-10 gap-4'>
                <p>{datas.length}</p>
                <div className='flex gap-4'>
                    <button onClick={handlePrevPage} className={`bg-blue-700 px-4 py-2 rounded-full text-white ${currentPage === 1 ? 'disabled' : ''}`}>
                    Previous
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index +1)}
                        className={` ${currentPage === index + 1 ? 'bg-black text-white px-3 py-2 rounded-full' : ''}`}
                    >
                        {index + 1}
                    </button>
                    ))}
                    <button onClick={handleNextPage} className={`bg-blue-700 px-4 py-2 rounded-full text-white ${currentPage === totalPages ? 'disabled' : ''}`}>
                    Next
                    </button>
                </div>
            </div>
    </section>
  )
}
