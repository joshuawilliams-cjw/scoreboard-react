import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
	static propTypes = {
		index: PropTypes.number,
		isHigherScore: PropTypes.bool,
	};

	render() {
		const { index } = this.props;

		return (
			<div className='player'>
				<Consumer>
					{({ actions, players }) => (
						<span className='player-name'>
							<button
								className='remove-player'
								onClick={() => actions.removePlayer(players[index].id)}
							>
								✖
							</button>
							<Icon
								isHigherScore={players[index].score === actions.higherScore}
							/>
							{players[index].name}
						</span>
					)}
				</Consumer>
				<Counter index={index} />
			</div>
		);
	}
}

export default Player;
