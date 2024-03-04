
import { Input } from '@nextui-org/react'
import React from 'react'
import Navbar from '~/pages/components/Navbar'

const Create = () => {
  return (
    <div>
      <Navbar/>
        <div className="p-4">
    <div className="flex border-b border-solid pb-4 mb-4 items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-slate-950">Create your users</div>
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
            placeholder="Name"
            className=" max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
          <p className="text-xl font-bold">Email</p>
          <Input
            key="outside-left"
            placeholder="Email"
            className=" max-w-[350px] rounded-lg border"
          />
        </div>
        <div>
        </div>
      </div>
      <button className="px-2 py-1 mt-3 font-bold rounded-md text-slate-200 hover:text-slate-400 bg-black  ">
        Create
      </button>
    {/* <CreateBillboard/> */}
  </div>
    </div>
    
  )
}

export default Create