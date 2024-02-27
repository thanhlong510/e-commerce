import React from 'react'
interface TitleProps {
    header:string,
    subHeader:string
  }
const TitleHeader: React.FC<TitleProps> = ({header, subHeader}) => {
  return (
        <div className="flex border-b border-solid pb-4 mb-4 items-center justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-950">{header}</div>
          <div className="text-lg text-slate-600">
            {subHeader}
          </div>
        </div>

    </div>
  )
}

export default TitleHeader