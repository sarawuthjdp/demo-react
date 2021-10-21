const FormComponent = ()=>{
    return (
        <div>
            <form>
                <div className="form-control">
                    <lable>ชื่อรายการ</lable>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" />
                </div>
                <div className="form-control">
                    <lable>จำนวนเงิน</lable>
                    <input type="number" placeholder="ระบุจำนวนเงิน" />
                </div>
                <div className="form-control">
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;