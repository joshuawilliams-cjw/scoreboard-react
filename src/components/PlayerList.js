import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
	return (
		<Consumer>
			{({ players, actions }) => (
				<div>
					{players.map((player, index) => (
						<Player
							index={index}
							key={player.id.toString()}
							isHigherScore={actions.higherScore === players.score}
						/>
					))}
				</div>
			)}
		</Consumer>
	);
};

export default PlayerList;
