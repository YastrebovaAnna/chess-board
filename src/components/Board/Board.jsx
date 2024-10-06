import PropTypes from "prop-types";
import {useState} from 'react'
import {Row} from './Row';
import './Board.css'

function Board({initialBoard}) {
    const [selectedSquare, setSelectedSquare] = useState(null);

    const handleSquareClick = (rowIndex, colIndex) => {
        setSelectedSquare({row: rowIndex, col: colIndex});
    };

    return (
        <div className="Board">
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

Board.propTypes = {
    initialBoard: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default Board;