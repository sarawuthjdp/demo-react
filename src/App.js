import { useEffect, useState } from 'react'
import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import './App.css'
import DataContext from './data/DataContext';
import ReportComponent from './Component/ReportComponent';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  const onAddNewItem = (newItems)=>{
    setItems([newItems,...items]);
  }

  const initData = [
    {id:1,title:'ค่าเช่าบ้าน',amount:-3000},
    {id:2,title:'เงินเดือน',amount:50000}
  ]

  const [items, setItems] = useState(initData)

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  useEffect(()=>{
    setReportIncome(items.map(items=>items.amount).filter(item=>item>0).reduce((total,curr)=>total+=curr,0).toFixed(2))
    setReportExpense((items.map(items=>items.amount).filter(item=>item<0).reduce((total,curr)=>total+=curr,0)*-1).toFixed(2))
  },[items]);

  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <div div className='container'>
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to='/'>ข้อมูลบัญชี</Link> 
              </li>
              <li>
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/' exact>
                <ReportComponent/>
              </Route>
              <Route path='/insert'>
                <FormComponent onAddItem={onAddNewItem}></FormComponent>
                <Transaction items={items}></Transaction>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider> 
  );
}

export default App;
