import Btn from "../btns/btn";

const Row = ({ vals, col, size, spc }) => {
    return (
        <div class={`row  column-gap-3 ${spc}`}>
            {vals.map((val, index) => (
                <Btn key={index} colour={col[index]} val={val} spc={size[index]} />
            ))}
        </div>
    )
}

export default Row;