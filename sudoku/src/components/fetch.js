const sudokuapiNewGrid = 'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value, solution}}}'

export const fetchPuzzle = async ({
    setError,
    setStatus,
    setPuzzle,
    setSolution,
    setBoard,
    setSelected
}) => {
    setError('')
    setStatus('')
    try {
        const response = await fetch(sudokuapiNewGrid)
        const data = await response.json()

        const grid = data.newboard.grids[0]

        const puzzle = grid.value.map((row) =>
            row.map((cell) => (cell === 0 ? null : cell))
        )

        const solution = grid.solution.map((row) =>
            row.map((cell) => (cell === 0 ? null : cell))
        )

        setPuzzle(puzzle);
        setSolution(solution);
        setBoard(puzzle.map((row) => [...row]));
        setSelected(null);
    } catch (error) {
        setError(error.message)
    }
};
