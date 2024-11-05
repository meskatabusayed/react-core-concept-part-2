
import './App.css'
import Count from './Count';
import Users from './Users';

function App() {

  function handleClicked(){
    alert("Clicked");
  }

  const handleClicked2 = () => {
    alert("Clicked 2")
  }
 
  const handleAdd = (num) => {
    alert(num + 3);
  }

  return (
    <>
      
      <h1>Users Data</h1>
      <Users></Users>

      <Count></Count>

      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Click 2</button>
      <button onClick={() => alert("third is clicked")}>third</button>
      <button onClick={() => handleAdd(10)}>Add</button>
      
    </>
  )
}

export default App
