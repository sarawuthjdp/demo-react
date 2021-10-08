const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;
const Describtion = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;
const Transaction = () => (
  <ul>
    <li>
      ค่าเดินทาง <span>-200</span>
    </li>
    <li>
      เงินเดือน <span>+20,000</span>
    </li>
    <li>
      ค่าอาหาร <span>-500</span>
    </li>
  </ul>
);

function App() {
  return (
    <>
      <Title></Title>
      <Describtion></Describtion>
      <Transaction></Transaction>
    </>
  );
}

export default App;
