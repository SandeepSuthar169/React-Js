// // Parent Component
// function Parent() {
//   return <Child name="Alice" age={25} />;
// }

// // Child Component
// function Child({name, age}) {
//   return (
//     <div>
//         <p>
//           hii, my name is {name} and my age is {age}
//         </p>
//     </div>
//   );
// }

// export default Parent;


function Child({clickButton}){
  return(
    <>
      <div>
        <button onClick={clickButton}>Click Me</button>
      </div>
    </>
  )
}


function Parent(){
  const handleCLick = () => {
    alert("button clicked")
  }

  return <Child clickButton={handleCLick}/>
}


export default Parent