import PropTypes from "prop-types";
import {Square} from "../Square/Square.jsx";

function Row({row, rowIndex, selectedSquare, onSquareClick}) {
    const isBlackSquare = (rowIndex, colIndex) => (rowIndex + colIndex) % 2 === 0;
    return (
        <div>
            {row.map((_, colIndex) => {
                const isBlack = isBlackSquare(rowIndex, colIndex);
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

Row.propTypes = {
    row: PropTypes.array.isRequired,
    rowIndex: PropTypes.number.isRequired,
    selectedSquare: PropTypes.shape({
        row: PropTypes.number,
        col: PropTypes.number,
    }),
    onSquareClick: PropTypes.func.isRequired,
};

export {Row};