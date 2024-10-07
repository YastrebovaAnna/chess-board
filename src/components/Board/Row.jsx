import PropTypes from "prop-types";
import {Square} from "../Square/Square.jsx";

function Row({row, rowIndex, selectedSquare, onSquareClick}) {
    return (
        <div>
            {row.map((_, colIndex) => {
                const isSelected = selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex;
                return (
                    <Square
                        key={`${rowIndex}-${colIndex}`}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        isSelected={isSelected}
                        onSquareClick={onSquareClick}
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