import {useState} from 'react'
import {Row} from './Row';
import './Board.css'


// eslint-disable-next-line react/prop-types
function Board({initialBoard}) {

    const [selectedSquare, setSelectedSquare] = useState(null);

    const handleSquareClick = (rowIndex, colIndex) => {
        setSelectedSquare({row: rowIndex, col: colIndex});
    };

    return (
        <div className="Board">
            {/* eslint-disable-next-line react/prop-types */}
            {initialBoard.map((row, rowIndex) => (
                <Row
                    key={rowIndex}
                    row={row}
                    rowIndex={rowIndex}
                    selectedSquare={selectedSquare}
                    onSquareClick={handleSquareClick}
                />
            ))}
        </div>
    );
}

export default Board;