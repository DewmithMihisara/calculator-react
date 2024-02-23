const Btn = ({ colour, val, spc, onClick }) => {
    return (
        <>
            <button type="button" className={`btn btn-outline-${colour} ${spc} rounded-5 d-flex justify-content-center align-items-center`} onClick={() => onClick(val)}>{val}</button>
        </>
    )
}

export default Btn;