import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'


function App() {
  const [ puppies, setPuppies] = useState(puppyList)

  console.log("puppyList:" , puppyList)  ///   this line to see the data in the console when app loads
  

  return (
   
    <div className="App">
      {
        puppies.map((puppy) =>{
          return <p> key={puppy.id}>{puppy.name}</p>;
        })

      }
    </div>
  );
}



export default App
