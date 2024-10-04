import './Square.css'

// eslint-disable-next-line react/prop-types
function Square({isBlack}) {
    const squareColorClass = isBlack ? 'black square' : 'white square';
    return <>
        <div className={`square ${squareColorClass}`}></div>
    </>
}

export {Square};