import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    {id:1,title:'ค่ารักษาพยาบาล',amount:2000},
    {id:2,title:'ค่าน้ำมัน',amount:5000},
    {id:3,title:'ค่าเช่าบ้าน',amount:8000},
  ]
  return (
    <ul className="item-list">
      {data.map((element)=><Item {...element} key={element.id}></Item>)}
    </ul>
  );
};

export default Transaction;
