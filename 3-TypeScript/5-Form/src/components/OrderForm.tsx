import  React, { useState } from "react"

interface OrderFormProps {
    onSubmit(
        order: {
            name: string, 
            cartoon: number
        }): void
}


const OrderForm = ({onSubmit}: OrderFormProps) => {

    const [name, setName] = useState<string>("LP")
    const [cartoon, setCartoon] = useState<number>(5)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        onSubmit({ name, cartoon })
        setName("")
        setCartoon(0)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>This is TypeScript Simple Project</label>
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}    
            />

            <input 
                type="number" 
                value={cartoon}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCartoon(Number(e.target.value) || 0)}
            />

            <button
               type="submit"         
            >
                BUTTON
            </button>
        </div>
    </form>
  )
}

export default OrderForm