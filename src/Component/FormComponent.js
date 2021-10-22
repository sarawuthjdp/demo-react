import { useState } from 'react'
import './FormComponent.css'

const FormComponent = ()=>{

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)

    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value);
    }
    const saveItem = (event)=>{
        event.preventDefault();
        const itemData = {
            title: title,
            amount: amount
        }
        console.log(itemData);
    }
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount}/>
                </div>
                <div className="form-control">
                    <button type="submit" className="btn">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;