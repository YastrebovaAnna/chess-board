import {Square} from "../Square/Square.jsx";

// eslint-disable-next-line react/prop-types
function Row({row, rowIndex, selectedSquare, onSquareClick}) {
    const isBlackSquare = (rowIndex, colIndex) => (rowIndex + colIndex) % 2 === 0;
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {row.map((_, colIndex) => {
                const isBlack = isBlackSquare(rowIndex, colIndex);
                // eslint-disable-next-line react/prop-types
                const isSelected = selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex;
                return (
                    <Square
                        key={`${rowIndex}-${colIndex}`}
                        isBlack={isBlack}
                        isSelected={isSelected}
                        onClick={() => onSquareClick(rowIndex, colIndex)}
                    />
                );
            })}
        </div>
    );
}

export {Row};