import Navbar from '../component/nav_bar.jsx';
const Calculator = () => {
    return (
        <div className="main-container">
            <Navbar />
            <section className='body d-flex justify-content-center align-items-center'>
                <section id="cal" className="border border-light rounded-5 d-flex flex-column justify-content-around shadow-lg p-3 mb-5 ">

                    <div className="w-100 border-bottom border-danger d-flex justify-content-end align-items-end">
                        <h1 id="main_num" className="me-4 mb-4 h1 display-1 ">0</h1>
                    </div>

                    <div className="w-100 ">
                        <div className="container text-center row-gap-3 text-light">
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    );
}

export default Calculator;