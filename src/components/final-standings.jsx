import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import allTeams from '../module/teams';
import '../styles/global.css';

class FinalStandings extends Component {
	state = {};
	render() {
		const finalStandings = [];

		const goldTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="gold-icon" />
		);
		const silverTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="silver-icon" />
		);
		const bronzeTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="bronze-icon" />
		);

		allTeams.forEach((team) => {
			switch (team.standing) {
				case 1:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {goldTrophyIcon}
						</li>
					);
					break;
				case 2:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {silverTrophyIcon}
						</li>
					);
					break;
				case 3:
					finalStandings.push(
						<li key={team.standing}>
							{team.standing}. {team.name} {bronzeTrophyIcon}
						</li>
					);
					break;
				default:
					if (team.lotteryPercentage === 0) {
						finalStandings.push(
							<li key={team.standing}>
								{team.standing}. {team.name}
							</li>
						);
					} else {
						finalStandings.push(
							<li key={team.standing}>
								{team.standing}. {team.name} ({team.lotteryPercentage}%)
							</li>
						);
					}
			}
		});

		return <div className="standings">{finalStandings}</div>;
	}
}

export default FinalStandings;
