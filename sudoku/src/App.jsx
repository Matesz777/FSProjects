import { useEffect, useState } from 'react';
import './App.css'
import { Board } from './components/Board'
import { Controls } from './components/Controls'
import { fetchPuzzle } from './components/fetch';
import { solve } from './algorithm/backtracking';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null).map(() => Array(9).fill(null)));
  const [puzzle, setPuzzle] = useState(Array(9).fill(null).map(() => Array(9).fill(null)));
  const [solution, setSolution] = useState(Array(9).fill(null).map(() => Array(9).fill(null)));
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [seleceted, setSelected] = useState(null);
  const [greenpuzzle, setGreenPuzzle] = useState(null);
  const [wrongCells, setWrongCells] = useState([]);

  useEffect(() => {
    fetchPuzzle({ setError, setStatus, setPuzzle, setSolution, setBoard, setSelected });
  }, [])
  const handlesolve = () =>{
    const boardCopy = board.map(row => row.map(cell => (cell === null ? 0 : cell)));

    const solved = solve(boardCopy);

    if(!solved){
      alert("Unsolvable");
      return;      
    }

    const finalBoard = boardCopy.map(row =>
    row.map(cell => (cell === 0 ? null : cell))
  );

    setBoard(finalBoard);
  };
  const handleinpotFun = (rowidx, colidx, value) => {
    if (value === "" || (value >= 1 && value <= 9)) {
      setBoard((prev) =>
        prev.map((row, r) =>
          row.map((cell, c) => {
            if (r === rowidx && c === colidx) {
              return value ? parseInt(value) : null;
            }
            return cell;
          })
        )
      );
    }
  };

  const handleCheck = () =>{
    const flatBoard = board.flat();
    const flatsolution = solution.flat();

    if (flatBoard.every((cell, i) => cell === flatsolution[i])) {
      setStatus("Correct");

      let count = 0;
      const totalcells = 81;
      const interval = setInterval(() => {
        count++;
        setGreenPuzzle(count)
        if (count === totalcells){
          clearInterval(interval);
        }
      }, 30)

    }
    else{
      setStatus("Incorrect");
      setGreenPuzzle(0);
    }
  }
  const handleReset = () =>{
    setBoard(puzzle.map((row) => [...row]));
    setStatus('');
    setSelected(null);
    setGreenPuzzle(0);
  }

  const handleNewPuzzle = () =>{
    setGreenPuzzle(0);
    fetchPuzzle({ setError, setStatus, setPuzzle, setSolution, setBoard, setSelected });
  }

  if(error){
    return <div style={{color: "red"}}>{error}</div>
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Sudoku</h1>
      <Board
        board={board}
        puzzle={puzzle}
        selected={seleceted}
        setSelected={setSelected}
        handleinpotFun={handleinpotFun}
        greenpuzzle={greenpuzzle}
      />
      <Controls 
      handleCheck={handleCheck} 
      handleReset={handleReset} 
      handleNewPuzzle={handleNewPuzzle}
      handleSolve={handlesolve}
      />
      {status && <div className='status'>{status}</div>}
    </div>
  )
}

export default App
