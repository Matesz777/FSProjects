export function isValid(board, row, col, value){
    for(let x = 0; x < 9; x++){
        if(board[row][x] === value){
            return false;
        }
    }

    for(let x = 0; x < 9; x++){
        if(board[x][col] === value){
            return false;
        }
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[startRow + i][startCol + j] === value){
                return false;
            }
        }
    }

    return true;
}

export function solve(board, row = 0, col = 0){
    if (row === 8 && col === 9){
        return true;
    }

    if (col === 9){
        row++;
        col = 0;
    }

    if(board[row][col] !== 0){
        return solve(board, row, col + 1);
    }

    for(let num = 1; num <= 9; num++){
        if(isValid(board, row, col, num)){
            board[row][col] = num;

            if(solve(board, row, col + 1)){
                return true;
            }
            board[row][col] = 0;
        }
    }

    return false;
}
