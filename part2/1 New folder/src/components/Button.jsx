function Button(props){
return (
    <>
    <button className='m-4 p-4 border-red-600 border rounded-xl'>
        {props.buttonName}
    </button>
    </>
)
}

export default Button