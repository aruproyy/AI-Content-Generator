import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-tr from-[#6F4E37] via-orange to-[#674636] flex text-white font-bold justify-center items-center flex-col'>
        <h2 className='text-3xl'>Browse through InnoWrite</h2>
        <p className='text-xl'>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rouned-md my-3 bg-white w-[35%]'>
                <Search className='text-primary'/>
                <input className='text-black bg-transparent w-full outline-none' type="text" placeholder='search'
                onChange={(event)=>onSearchInput(event.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection