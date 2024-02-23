import Btn from "../btns/btn";

const MidRow = ({ vals , sim, onClick}) => {
    return (
        <div className="row column-gap-3 mt-3">
            {vals.map(val => (
                <Btn colour={"dark"} val={val} spc={"col"} onClick={onClick}/>
            ))}
            <Btn colour={"success"} val={sim} spc={"col"} onClick={onClick}/>
        </div>
    )
}

export default MidRow;

