export const Controls = ({handleCheck, handleNewPuzzle, handleReset, handleSolve}) => {
    return (
        <div className="controls" style={{marginTop: "8px"}}>
            <button onClick={handleReset} style={{marginRight: "10px"}}>Reset</button>
            <button onClick={handleNewPuzzle} style={{marginRight: "10px"}}>Generate</button>
            <button onClick={handleSolve} style={{marginRight: "10px"}}>Solve</button>   
            <button onClick={handleCheck}>Check</button> 
        </div>
    );
};