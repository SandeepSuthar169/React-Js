import React from 'react'

function Card({children, title, color='blue'}){    // VVV imp { children props }
  const colorClassess = {
    blue: 'border-blue-500 bg-blue-500',
    green: 'border-green-500 bg-green-500',
    purple: 'border-purple-500 bg-purple-500',
    red: 'border-red-500 bg-red-500',
    }

    return (
      <div className={`border-l-4 ${colorClassess[color]} p-6 rounded-md`}>
        {title && (
          <h3 className='text-xl font-bold mb-3 text-gray-800 '>{title}</h3>
        )}
        <h3>i will do any thing </h3> 
        <div className='text-gray-700'>{children}</div>
      </div>
    )
}

function Container({children, layout = 'vartical'}){
  const layoutClasses = {
    vartical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
  };

  return(
    <div className={layoutClasses[layout]}>{children}</div>
  )
}


function ChildrenProps() {
  return (
    <section className='p-8 bg-white rounded-xl shadow-lg'>
      <h2>Children prop</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ullam et similique perspiciatis cum aliquid!
      </p>
      <div className='space-y-6'>
        <div>
          <h3>Card component with children</h3>
          <Container layout='grid'>
            <Card title="User Profile" color='blue'>
              <p className='mb-2'>
                <strong>Name:</strong> Sandeep suthar
              </p>  
              <p className='mb-2'>
                <strong>Email:</strong> Sandeep@suthar.com
              </p>  
              <p className='mb-2'>
                <strong>Role:</strong> SOFTWARE DEVELOPER
              </p>  
            </ Card>
            <Card title="Statistics" color='green'>
              <p className='mb-2'>
                <strong>Name:</strong> karan parmar
              </p>  
              <p className='mb-2'>
                <strong>Email:</strong> karan@suthar.com
              </p>  
              <p className='mb-2'>
                <strong>Role:</strong> SOFTWARE DEVELOPER
              </p>  
              <button className='rounded-3xl py-2 px-6 bg-white text-gray-600 hover:bg-gray-900 hover:text-white'>This is a Button</button>
            </ Card>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default ChildrenProps
