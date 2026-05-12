

import React from 'react'

const Card = ({children, title, color = "blue"}) => {
  
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  }
  
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-500">{title}</h3>}

      <div className="text-gray-700">{children}</div>
    </div>
  )
}



const ChildrenProps = () => {
  return (
    <div>ChildrenProps</div>
  )
}

export default ChildrenProps