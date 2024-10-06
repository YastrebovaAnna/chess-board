import {useState} from 'react'
import {Square} from "../Square/Square.jsx";
import './Board.css'


// eslint-disable-next-line react/prop-types
function Board({initialBoard}) {

    const [selectedSquare, setSelectedSquare] = useState(null);

    const getSquareColor = (rowIndex, colIndex) => (rowIndex + colIndex) % 2 === 0;

    const handleClick = (rowIndex, colIndex) => {
        setSelectedSquare({row: rowIndex, col: colIndex});
    };

    const isSquareSelected = (rowIndex, colIndex) => {
        return selectedSquare && selectedSquare.row === rowIndex && selectedSquare.col === colIndex;
    };

    return (
        <div className="Board">
            {/* eslint-disable-next-line react/prop-types */}
            {initialBoard.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((col, colIndex) => {
                        const isBlack = getSquareColor(rowIndex, colIndex);
                        const isSelected = isSquareSelected(rowIndex, colIndex);
                        return (
                            <Square
                                key={`${rowIndex}-${colIndex}`}
                                isBlack={isBlack}
                                isSelected={isSelected}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;