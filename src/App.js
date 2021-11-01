import { useEffect, useState } from 'react'
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
  const initState = [
    {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
    {id:2,title:"เงินเดือน",amount:20000},
    {id:3,title:"ค่าเดินทาง",amount:-500},
    {id:4,title:"ขายของ",amount:2000}
  ]
  const [items, setItems] = useState(initState)

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  useEffect(()=>{
    setReportIncome(items.map(items=>items.amount).filter(item=>item>0).reduce((total,curr)=>total+=curr,0))
    setReportExpense(items.map(items=>items.amount).filter(item=>item<0).reduce((total,curr)=>total+=curr,0)*-1)
  },[items]);
  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <div div className='container'>
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}></FormComponent>
        <Transaction items={items}></Transaction>
      </div>
    </DataContext.Provider> 
  );
}

export default App;
