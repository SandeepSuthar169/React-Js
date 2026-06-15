
const Card = ({children, title, color}) => {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    red: "border-red-500 bg-red-500",
    orange: "border-orange-500 bg-orange-500",
    purple: "border-purple-500 bg-purple-300 ",
  }

  return (
    <>
      <div className={`border-l-4 ${colorClasses[color]} rounded-2xl p-3`}>
        {title && 
          <h3 className="text-xl font-bold mb-3 text-black">
            {title}
          </h3>
        }

        <div
          className="text-black font-bold"
        >{children}
        </div>
        

      </div>
    </>
  )
}


const Container = ({children, layout}) => {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  }

  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}



const ChildrenProps = () => {
  return (
    <section className="p-8 bg-amber-50 rounded-2xl shadow-lg mt-4 text-black">
      <h2>Children Props</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum placeat iste vitae commodi natus voluptatem nisi eligendi error cupiditate animi. Quam placeat, officiis perferendis consectetur porro provident hic. Deserunt, porro?</p>
      <div className="space-y-6">
        <div>
          <h3>Card component with child</h3>

          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name: </strong>Sandeep Suthar
              </p>
              <p className="mb-2">
                <strong>Email: </strong>sandeepsuthar22k@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role: </strong>Software Developer
              </p>
            </Card>
            <Card title="Statustics" color="orange">
              <p className="mb-2">
                <strong>Total Users: </strong>1, 2, 3, 
              </p>
              <p className="mb-2">
                <strong>Active Session: </strong>5329342
              </p>
              <p className="mb-2">
                <strong>Revenue: </strong>$983,000,00
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default ChildrenProps