
import { Input } from '@nextui-org/react'
import React from 'react'
import CreateBillboard from '~/pages/components/CreateBillboard'
import Navbar from '~/pages/components/Navbar'

const Create = () => {
  return (
    <div>
      <Navbar/>
        <div className="p-4">
    <div className="flex border-b border-solid pb-4 mb-4 items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-slate-950">Create your Billboards</div>
        <div className="text-lg text-slate-600">
          Manage billboard for your stores
        </div>
      </div>
    
    </div>
    <div className="flex space-x-40">
        <div>
          <p className="text-xl font-bold">Name</p>
        
          <Input
            key="outside-left"
            placeholder="Category name"
            className="ml-3 max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
          <p className="text-xl font-bold">BillBoard</p>
          <Input
            key="outside-left"
            placeholder="Category name"
            className="ml-3 max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
        </div>
      </div>
    {/* <CreateBillboard/> */}
  </div>
    </div>
    
  )
}

export default Create