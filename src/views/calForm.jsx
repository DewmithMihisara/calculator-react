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
                            <div class="row  column-gap-3">
                                <button type="button" class="btn btn-outline-danger col-6 rounded-5 d-flex justify-content-center align-items-center ">C</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">⇦</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">/</button>
                            </div>
                            <div class="row column-gap-3 mt-3">
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">7</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">8</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">9</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">*</button>
                            </div>
                            <div class="row column-gap-3 mt-3">
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">4</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">5</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">6</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">-</button>
                            </div>
                            <div class="row column-gap-3 mt-3">
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">1</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">2</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">3</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">+</button>
                            </div>
                            <div class="row column-gap-3 d-flex justify-content-center mt-3">
                                <button type="button" class="btn btn-outline-dark col-6 rounded-5 d-flex justify-content-center align-items-center ">0</button>
                                <button type="button" class="btn btn-outline-dark col rounded-5 d-flex justify-content-center align-items-center ">.</button>
                                <button type="button" class="btn btn-outline-success col rounded-5 d-flex justify-content-center align-items-center ">=</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    );
}

export default Calculator;