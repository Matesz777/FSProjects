import classNames from "classnames";

export const Board  = ({board, puzzle, selected, setSelected, handleinpotFun, greenpuzzle}) => {


    return (
        <div className="main-container">
            <table className="board">
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => {
                                const isPrefilled = puzzle[rowIndex][colIndex] !== null;
                                const cellIndex = rowIndex * 9 + colIndex;
                                return (
                                    <td key={colIndex} className={classNames(
                                        "cell",
                                        {
                                            'same-row': selected && rowIndex === selected[0],
                                            'same-col': selected && colIndex === selected[1],
                                            'same-box': selected && Math.floor(rowIndex / 3) === 
                                            Math.floor(selected[0] / 3) 
                                            && Math.floor(colIndex / 3) 
                                            === Math.floor(selected[1] / 3),
                                            'green': cellIndex < greenpuzzle
                                        }
                                    )}>
                                        
                                        <input 
                                            type="text"
                                            maxLength={1}
                                            value={cell === null ? '' : cell} 
                                            readOnly={isPrefilled}
                                            onFocus={() => {
                                                setSelected([rowIndex, colIndex])
                                            }}

                                            onClick={() => {
                                                setSelected([rowIndex, colIndex])
                                            }}

                                            onChange={(e) => {
                                                handleinpotFun(rowIndex, colIndex, e.target.value)
                                            }}
                                        />
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}