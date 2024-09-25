import { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState('0')

  const createGrid = (n:any) => {
    // let a = [];
    let tempArr = [];
    if(n>0){
      for(let i=0; i<n;i++){
        for(let z=1; z<=n; z++){
          console.log("z", z);
          // a.push(z);
          tempArr.push(z);
        }
        // a.slice(n,-1);
        console.log("tempArr",tempArr)
      }
    }
    return tempArr.toString();
  }
  return (
    <div className="App">
      <input placeholder='grid' type='number' onChange={(e)=> setGrid(e.target.value)}/>
      <h2>{grid}</h2>
      <p>{createGrid(grid)}</p>
    </div>
  );
}

export default App;
