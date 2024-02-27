import React from 'react'
import { api } from '~/utils/api'

const Xinchao = () => {
  
  // const a=api.store.create.useMutation()
  // a.mutate({
  //   name:'xin chao'
  // })

  const handle =()=>{
    return 
  }
  const {data:billboard} = api.billboard.getAll.useQuery()
  console.log(billboard)
  return (
    <div>
      <button onClick={handle}>
      Xinchao
      </button>

    </div>
  )
}

export default Xinchao