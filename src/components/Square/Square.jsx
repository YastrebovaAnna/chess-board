import PropTypes from "prop-types";
import './Square.css'

function Square({rowIndex, colIndex, isSelected, onSquareClick}) {
    const isBlack = (rowIndex + colIndex) % 2 === 0;

    let squareColorClass = isBlack ? 'black square' : 'white square';
    if (isSelected) squareColorClass += ' selected';

    return (
        <div className={`square ${squareColorClass}`} onClick={() => onSquareClick(rowIndex, colIndex)}>
        </div>
    );
}

Square.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    colIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSquareClick: PropTypes.func.isRequired,
};
export {Square};