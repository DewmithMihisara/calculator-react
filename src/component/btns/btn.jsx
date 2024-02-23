const Btn=({colour,val,spc}) =>{
    return(
        <>
            <button type="button" className={`btn btn-outline-${colour} ${spc} rounded-5 d-flex justify-content-center align-items-center`}>{val}</button>
        </>
    )
}

export default Btn;