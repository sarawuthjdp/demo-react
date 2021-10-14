import Item from "./Item";
import './Transaction.css'

const Transaction = () => (
  <ul className='item-list'>
    <Item title="ค่ารักษาพยาบาล" amount="2000"></Item>
    <Item title="เงินเดือน" amount="50000"></Item>
    <Item title="ค่าเดินทาง" amount="500"></Item>
    <Item title="ค่าเช่าห้อง" amount="8000"></Item>
  </ul>
);

export default Transaction;
