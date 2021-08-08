import React, { Component } from 'react';
import allTeams from '../module/teams';
import '../styles/global.css';

class DraftOrder extends Component {
	state = {};
	render() {
		const draftOrder = [];

		let draftPosition = allTeams.length;
		allTeams.forEach((team) => {
			if (team.selected) {
				draftOrder.unshift(
					<li key={draftPosition}>
						{draftPosition}. {team.name}
					</li>
				);
			} else {
				draftOrder.unshift(<li key={draftPosition}>{draftPosition}. ???</li>);
			}
			draftPosition--;
		});
		return (
			<>
				<div className="standings">{draftOrder}</div>
			</>
		);
	}
}

export default DraftOrder;
