"use client"
import React from 'react'
import Image from 'next/image';
import './Slides.css'

const Slides = ({data}) => {
  
  return (
    <div className='flex '>
        {
            data.map((data,index)=>( 
                <div key={index} id='Slide' className='flex gap-[45px] w-[100vw] justify-center' >
                   <Image src={data.img} alt='' className='w-[400px] md:w-[540px] h-[390px]'/>

                   <div className='Slide_text_data md:w-[600px] lg:w-[700px]' >
                        <h2> <span className='slide_index'>{index+1}</span>{data.heading}</h2>
                        <ul>
                            {
                                data.text.map((textData,i)=>(
                                    <li key={i}>{textData}</li>
                                ))
                            }
                        </ul>
                   </div>


                </div>
            ))
        }
    </div>
  )
}

export default Slides