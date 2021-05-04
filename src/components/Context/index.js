import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
	state = {
		players: [
			{
				name: 'Joshua',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	// player id counter
	prevPlayerId = 4;

	handleScoreChange = (index, delta) => {
		this.setState((prevState) => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];
			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };

			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;

			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
	};

	getHigherScore = () => {
		const scores = this.state.players.map((player) => player.score);
		const higherScore = Math.max(...scores);
		if (higherScore) {
			return higherScore;
		}
		return null;
	};

	handleAddPlayer = (name) => {
		this.setState((prevState) => {
			return {
				players: [
					...prevState.players,
					{
						name, //ES2015 - whenever a key and variable name match, you can write just the key name. i.e. name: name equiv to name,
						score: 0,
						id: (this.prevPlayerId += 1),
					},
				],
			};
		});
	};

	handleRemovePlayer = (id) => {
		this.setState((prevState) => {
			return {
				players: prevState.players.filter((p) => p.id !== id),
			};
		});
	};

	render() {
		return (
			<ScoreboardContext.Provider
				value={{
					players: this.state.players,
					actions: {
						changeScore: this.handleScoreChange,
						removePlayer: this.handleRemovePlayer,
						addPlayer: this.handleAddPlayer,
						higherScore: this.getHigherScore(),
					},
				}}
			>
				{this.props.children}
			</ScoreboardContext.Provider>
		);
	}
}
export const Consumer = ScoreboardContext.Consumer;
