import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='p-5 shadow-md rounded-md bg-[#FFF9C9]
    flex flex-col text-black cursor-pointer hover:scale-105 transition-all w-auto h-[250px] border border-blue-950'>
        <Image src={item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-bold text-lg'>{item.name}</h2>
        <p className='text-gray-800 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard