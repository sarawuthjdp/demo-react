import Item from "./Item";
import "./Transaction.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";
const Transaction = (props) => {
  const {items} = props;
  const name = useContext(DataContext);
  return (
    <>
      <ul className="item-list">
        {items.map((element)=><Item {...element} key={element.id}></Item>)}
      </ul>
      {name}
    </>
  );
};

export default Transaction;
