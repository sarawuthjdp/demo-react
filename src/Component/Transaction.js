import Item from "./Item";
import "./Transaction.css";

const Transaction = (props) => {
  const {items} = props;
  return (
    <ul className="item-list">
      {items.map((element)=><Item {...element} key={element.id}></Item>)}
    </ul>
  );
};

export default Transaction;
