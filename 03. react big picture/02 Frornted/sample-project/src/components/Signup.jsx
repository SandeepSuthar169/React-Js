import React, {useState} from "react";




function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        // Make an API call to backend with data
        // get reponse from backend
        // take action based on response
    }

    return (
        <>
            <h1>welcome to to signUp page</h1>    
            <form onSubmit={handleSubmit}>
                <div className="from-group" >
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div className="from-group" >
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="from-group" >
                    <label htmlFor="email">Password: </label>
                    <input
                        type="text" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button
                type="submit"
                disabled={loading}
                >{loading ? "Signup....." : "Signup"}</button>

            </form>    
        </>
    )
}

export default SignUp
