import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    {title:'ค่ารักษาพยาบาล',amount:2000},
    {title:'ค่าน้ำมัน',amount:5000},
    {title:'ค่าเช่าบ้าน',amount:8000},
  ]
  return (
    <ul className="item-list">
      {data.map((element)=><Item {...element}></Item>)}
    </ul>
  );
};

export default Transaction;
