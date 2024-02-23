import Btn from "../btns/btn";

const MidRow = ({ vals , sim}) => {
    return (
        <div class="row column-gap-3 mt-3">
            {vals.map(val => (
                <Btn colour={"dark"} val={val} spc={"col"}/>
            ))}
            <Btn colour={"success"} val={sim} spc={"col"}/>
        </div>
    )
}

export default MidRow;

