import { useState } from "react";


export function useContactFornm(){
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const submitContanct = async (formData) => {
        setLoading(true)
        setSuccessMessage(null)
        setErrorMessage(null)


        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(!res.ok) throw new Error(data.error || "something went wrong" )
                setErrorMessage(data.seccess || "Message sent")
        } catch (error) {
            setErrorMessage(error.message || "Request failed")
        } finally {
            setLoading(false)
        }


    }
    return {
        loading, 
        successMessage,
        errorMessage, 
        submitContanct 
    }
   
}