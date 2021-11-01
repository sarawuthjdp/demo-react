import { useState } from 'react'
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import './App.css'
import DataContext from './data/DataContext';
function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  const [items, setItems] = useState([])
  const onAddNewItem = (newItems)=>{
    setItems([newItems,...items]);
  }

  return (
    <DataContext.Provider value={"testContext"}>
      <div div className='container'>
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <FormComponent onAddItem={onAddNewItem}></FormComponent>
        <Transaction items={items}></Transaction>
      </div>
    </DataContext.Provider> 
  );
}

export default App;
