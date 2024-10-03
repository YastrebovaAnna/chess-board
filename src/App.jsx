import ChessBoard from "./components/Board/Board.jsx";
import {initialBoard} from "./data/initialBoard.js";

function App() {
    return (
        <>
            <h1>Chess Board</h1>
            <ChessBoard initialBoard={initialBoard}></ChessBoard>
        </>
    )
}

export default App
