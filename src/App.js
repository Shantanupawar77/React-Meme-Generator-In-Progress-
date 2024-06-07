import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Meme from "./components/Meme"
import React from 'react';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      
      <Meme/>
    </div>
  );
}

// State practise
// function App() {
//   const [isImportant, setIsImportant]=React.useState("No");

//   function handleClick(){
//     if (isImportant==="No"){
//       setIsImportant("Yes");
//     }
//     else{
//       setIsImportant("No");
//     }
  
//   }

//   return (
//     <div className="App">
//      <h1>Is State important to know ?</h1>
//       <h2>{isImportant}</h2>
//       <button onClick={handleClick}>Click here to change</button>
//     </div>
//   );
// }
// import Counter from "./components/Counter"
// function App() {
//   const [counter, setCounter]=React.useState(0);
//   function handleClickMinus(){
//     setCounter(function(oldvalue){
//       return oldvalue-1;
//     });
    
//   }
//   function handleClickPlus(){
//     setCounter(counter + 1);
//     return
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClickMinus}>Minus -</button>
//       {/* <h1>{counter}</h1> */}
//       <Counter number={counter} />
//       <button onClick={handleClickPlus}>Plus +</button>
      
//       </div>
//   );
// }

// function App() {
//   const [thingsArray, setThingsArray]=React.useState(["Thing 1","Thing 2"]);

//   function addItem(){
//     setThingsArray(prevThingsArray=>{
//       return (
//         [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]

//       )
//      })

//   }
//   const thingsItems = thingsArray.map((thing)=>{
//     return(
//       <p>{thing}</p>
//     )
    
//   })
//   return (
//     <div className="App">
//       <button onClick={addItem}>Add Item</button>
//       {thingsItems}
//     </div>
//   );
// }

export default App;
