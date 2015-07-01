class Game {
	constructor() {
		this.board = [
			[Marker.Empty, Marker.Empty, Marker.Empty],
			[Marker.Empty, Marker.Empty, Marker.Empty],
			[Marker.Empty, Marker.Empty, Marker.Empty]
		];
		this.currentTurn = 1;
		this.whoGoesFirst = Marker.X; //X *always* goes first!
		this.whosTurnIsIt = this.whoGoesFirst;
	}
	board: Marker[][];
	currentTurn: number;
	whoGoesFirst: Marker;
	whosTurnIsIt: Marker;
}