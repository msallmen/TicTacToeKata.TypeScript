var Game = (function () {
    function Game() {
        this.board = [
            [Marker.Empty, Marker.Empty, Marker.Empty],
            [Marker.Empty, Marker.Empty, Marker.Empty],
            [Marker.Empty, Marker.Empty, Marker.Empty]
        ];
        this.currentTurn = 1;
        this.whoGoesFirst = Marker.X; //X *always* goes first!
        this.whosTurnIsIt = this.whoGoesFirst;
    }
    return Game;
})();
//# sourceMappingURL=GameBoard.js.map