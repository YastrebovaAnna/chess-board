import {Square} from "../Square/Square.jsx";
import './Board.css'


// eslint-disable-next-line react/prop-types
function Board({initialBoard}) {
    return (
        <div className="Board">
            {/* eslint-disable-next-line react/prop-types */}
            {initialBoard.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <Square key={`${rowIndex}-${colIndex}`}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;