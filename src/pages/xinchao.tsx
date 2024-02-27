import React from 'react'

const Xinchao = () => {
  return (
    <div>Xinchao

<input
        type="text"
        id="title"
        className="mt-1 h-auto min-h-[20px] w-full rounded py-2 text-2xl font-extrabold focus:outline-none "
        placeholder="Add the category"
        // onChange={handleTitleChange}
      />

      <button className="text-lg font-bold">Submit</button>
    </div>
  )
}

export default Xinchao