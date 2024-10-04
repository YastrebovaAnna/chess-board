import {Square} from "../Square/Square.jsx";
import './Board.css'


// eslint-disable-next-line react/prop-types
function Board({initialBoard}) {
    const getSquareColor = (rowIndex, colIndex) => (rowIndex + colIndex) % 2 === 0;

    return (
        <div className="Board">
            {/* eslint-disable-next-line react/prop-types */}
            {initialBoard.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((col, colIndex) => {
                        const isBlack = getSquareColor(rowIndex, colIndex);
                        return (
                            <Square
                                key={`${rowIndex}-${colIndex}`}
                                isBlack={isBlack}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;