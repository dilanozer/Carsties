import Heading from '@/app/components/Heading'
import React from 'react'
import AuctionForm from '../AuctionForm'

export default function Create() {
  return (
    <div className='mx-auto max-w-[75%] shadow-lg bg-white rounded-lg p-4 space-y-4'>
      <Heading title='Sell your car!' subtitle='Please enter the details of your car' />
      <AuctionForm />
    </div>
  )
}
