// Requirements:
// * if three Marker.X or Marker.O appear in a line across, down or diagonally, return a GameResult indicating which marker has won.
// * if there is no winner and no squares remain, return a GameResult indicating isTie.
// * if there is no winner and there are still squares unclaimed, the game isStillGoing

class YourGameResultService implements IGameResultService {
    checkResult(game: Game): GameResult {
        var isTie: boolean = true;
        var hasWinner: boolean = false;
        var whoWon: Marker = Marker.Empty;

        //Rows
        for (var i = game.board.length - 1; i >= 0; i--) {
            //Search for any empty square
            for (var j = game.board[i].length - 1; j >= 0; j--) {
                if (game.board[i][j] == Marker.Empty) {
                    isTie = false;
                }
            }

            //Winner completed row across
            if (game.board[i][0] == game.board[i][1] && game.board[i][0] == game.board[i][2]) {
                whoWon = game.board[i][0];
                if (whoWon != Marker.Empty) {
                    hasWinner = true;
                    break;
                }
            }
        }

        //Game still not determined
        if (!hasWinner && !isTie) {
            //Columns
            for (var k = game.board.length - 1; k >= 0; k--) {
                //Winner completed column down
                if (game.board[0][k] == game.board[1][k] && game.board[0][k] == game.board[2][k]) {
                    whoWon = game.board[0][k];
                    if (whoWon != Marker.Empty) {
                        hasWinner = true;
                        break;
                    }
                }
            }
        }

        //Game still not determined
        if (!hasWinner && !isTie) {
            //Diagonals
            if (game.board[1][1] == game.board[0][0] && game.board[1][1] == game.board[2][2] ||
                game.board[1][1] == game.board[0][2] && game.board[1][1] == game.board[2][0]) {
                whoWon = game.board[1][1];
                hasWinner = whoWon != Marker.Empty;
            }
        }

        return new GameResult(isTie, hasWinner, whoWon);
	}
} 