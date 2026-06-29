import OrderForm from "./components/OrderForm"

 

const App = () => {
  return (
    <div>
      <OrderForm 
        onSubmit={(t) => {
          t.cartoon, t.name
          console.log(t.cartoon, t.name);
          
        }}
      />
    </div>
  )
}

export default App