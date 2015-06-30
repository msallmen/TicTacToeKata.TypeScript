// Requirements:
//  * should check if the square is taken and return invalid if it is
//  * if the square is valid, claim it by changing that squares state on the board
//  * if the square is valid, increment the turn and change the whosTurnIsIt to reflect the success.

class YourTurnService implements ITurnService {
	tryTakeTurn(game: Game, attempt: TurnAttempt): TurnResult {
        if (game.board[attempt.x][attempt.y] == Marker.Empty) {
            game.board[attempt.x][attempt.y] = game.whosTurnIsIt;
            game.currentTurn++;
            game.whosTurnIsIt = game.whosTurnIsIt == Marker.X
                ? Marker.O
                : Marker.X;
            return TurnResult.Valid;
        }
        return TurnResult.Invalid;
    }
}