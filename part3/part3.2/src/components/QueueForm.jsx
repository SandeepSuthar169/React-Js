import React, { useState } from 'react'
import { FaUserPlus } from "react-icons/fa"


export default function QueueForm ({ onAdd }) {

    const [name, setName] = useState("")
    const [service, setService] = useState("")

    

    const handleSubmit = (e) => {
       e.preventDefault()
       if(!name.trim() || !service.trim()) return;

       onAdd({ name, service })
       setName("")
       setService("")
    }

    const handleNameE = (e) => {
        setName(e.target.value)
    }
    const handleServiceE = (e) => {
        setService(e.target.value)
    }    
;

  return (
    <>
        <form className="queue-form" onSubmit={handleSubmit}>
            <h2>Add to queue</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    value={name}
                    placeholder="Customer name"
                    onChange={handleNameE}
                />
            </div>
            <div className="form-group">
                <select  
                    value={service}
                    onChange={handleServiceE}
                >
                    <option value="">SelectService</option>
                    <option value="payment">patment</option>
                    <option value="consultation">consultation</option>
                    <option value="support">support</option>
                </select>
            </div>
                <div>
                    <button type="submit">
                        <FaUserPlus />
                        Add Customer
                    </button>
                </div>
        </form>
    </>
  )
}

