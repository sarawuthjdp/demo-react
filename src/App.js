import Transaction from "./Component/Transaction";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  return (
    <>
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <Transaction></Transaction>
    </>
  );
}

export default App;
