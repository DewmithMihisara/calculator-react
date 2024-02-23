import { useState } from 'react';
import Navbar from '../component/nav_bar.jsx';
import MidRow from '../component/row/mid_row.jsx';
import Row from '../component/row/row.jsx';

const Calculator = () => {
    const [dis, setDis]=useState(0);

    let handleButtonClick=(value)=>{
        if (value === '=') {
            
        } else if (value === 'C') {
            setDis('0');
        } else if (value === '⇦') {
            setDis(prevValue => prevValue.slice(0, -1));
        }
    }
    return (
        <div className="main-container">
            <Navbar />
            <section className='body d-flex justify-content-center align-items-center'>
                <section className="cal border border-light rounded-5 d-flex flex-column justify-content-around shadow-lg p-3 mb-5 ">

                    <div className="w-100 border-bottom border-danger d-flex justify-content-end align-items-end">
                        <h1 id="main_num" className="me-4 mb-4 h1 display-1 ">{dis}</h1>
                    </div>

                    <div className="w-100 ">
                        <div className="container text-center row-gap-3 text-light">
                            <Row vals={["C","⇦","/"]} col={["danger","success","success"]} size={["col-6","col","col"]} onClick={handleButtonClick}/>
                            <MidRow vals={[7, 8, 9]} sim={"*"} onClick={handleButtonClick}/>
                            <MidRow vals={[4, 5, 6]} sim={"-"} onClick={handleButtonClick}/>
                            <MidRow vals={[1, 2, 3]} sim={"+"} onClick={handleButtonClick}/>
                            <Row vals={[0,".","="]} col={["dark","dark","success"]} size={["col-6","col","col"]} spc={"d-flex justify-content-center mt-3"}onClick={handleButtonClick}/>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    );
}

export default Calculator;