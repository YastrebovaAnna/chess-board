import PropTypes from "prop-types";
import './Square.css'

function Square({isBlack, isSelected, onClick}) {
    let squareColorClass = isBlack ? 'black square' : 'white square';
    if (isSelected)
        squareColorClass += ' selected';

    return (
        <div className={`square ${squareColorClass}`} onClick={onClick}>
        </div>
    );
}

Square.propTypes = {
    isBlack: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
export {Square};