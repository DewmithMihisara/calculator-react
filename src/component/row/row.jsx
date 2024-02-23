import Btn from "../btns/btn";

const Row = ({ vals, col, size, spc, onClick }) => {
    return (
        <div className={`row  column-gap-3 ${spc}`}>
            {vals.map((val, index) => (
                <Btn key={index} colour={col[index]} val={val} spc={size[index]} onClick={onClick} />
            ))}
        </div>
    )
}

export default Row;