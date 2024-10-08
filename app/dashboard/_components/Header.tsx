import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <Link href={"/"}>
        <Button
          className="bg-[#6C3428] rounded-full
          hover:text-black hover:scale-105 duration-500">
          <ArrowLeft />Back to Main Page</Button>
      </Link>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membership just for $9.99/Month</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header