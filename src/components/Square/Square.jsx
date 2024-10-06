import './Square.css'

// eslint-disable-next-line react/prop-types
function Square({isBlack, isSelected, onClick}) {
    let squareColorClass = isBlack ? 'black square' : 'white square';
    if (isSelected)
        squareColorClass += ' selected';

    return (
        <div className={`square ${squareColorClass}`} onClick={onClick}>
        </div>
    );
}

export {Square};