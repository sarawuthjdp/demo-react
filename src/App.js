import { useEffect, useReducer, useState } from 'react'
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import './App.css'
import DataContext from './data/DataContext';
import ReportComponent from './Component/ReportComponent';
function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  const onAddNewItem = (newItems)=>{
    setItems([newItems,...items]);
  }

  const [items, setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  useEffect(()=>{
    setReportIncome(items.map(items=>items.amount).filter(item=>item>0).reduce((total,curr)=>total+=curr,0))
    setReportExpense(items.map(items=>items.amount).filter(item=>item<0).reduce((total,curr)=>total+=curr,0)*-1)
  },[items]);

  const [showReport,setShowReport] = useState(false)
  const reducer = (state,action)=>{
    switch(action.type){
      case 'SHOW':
        return setShowReport(true);
      case 'HIDE':
        return setShowReport(false);
    }
  }
  const [result,dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <div div className='container'>
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        {showReport && <ReportComponent/>}
        <FormComponent onAddItem={onAddNewItem}></FormComponent>
        <Transaction items={items}></Transaction>
        <button onClick={()=>dispatch({type:'SHOW'})}>แสดง</button>
        <button onClick={()=>dispatch({type:'HIDE'})}>ซ่อน</button>
      </div>
    </DataContext.Provider> 
  );
}

export default App;
