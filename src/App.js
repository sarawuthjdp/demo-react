import Transaction from './Component/Transaction'
const Title = () => <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;
const Describtion = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;

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
