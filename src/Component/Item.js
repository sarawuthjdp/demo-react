import './Item.css'

const Item = () => {
  const name = "เดินห้างซื้อของ";
  const amount = 5000;
  return (
    <li className='item'>
      {name} <span>-{amount}</span>
    </li>
  );
};
export default Item;
