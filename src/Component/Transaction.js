import { useContext } from "react";
import DataContext from "../data/DataContext";
import Item from "./Item";
import "./Transaction.css";
const Transaction = (props) => {
  const {items} = props;
  const {income, expense} = useContext(DataContext);
  return (
    <>
      <ul className="item-list">
        {items.map((element)=><Item {...element} key={element.id}></Item>)}
      </ul>
      <p>รายรับ : {income} รายจ่าย : {expense}</p>
    </>
  );
};

export default Transaction;
