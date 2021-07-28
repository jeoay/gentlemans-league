import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styles/global.css';
import '../styles/draft-lottery.css';

class DraftLottery extends Component {
	title = 'Draft Lottery';
	columnTitle = [
		'2020 Final Results (Pick %):',
		'Next Pick:',
		'2021 Draft Order:',
	];

	allTeams = [
		{
			name: 'Jared Nelson',
			standing: 1,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Akis Yerocostas',
			standing: 2,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Nick Routh',
			standing: 3,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Max Clinch',
			standing: 4,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Joel Andersen',
			standing: 5,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Ryan Silva',
			standing: 6,
			selected: true,
			lotteryPercentage: 0,
		},
		{
			name: 'Joey Pellegrino',
			standing: 7,
			selected: false,
			lotteryPercentage: 35,
		},
		{
			name: 'Max Nelson',
			standing: 8,
			selected: false,
			lotteryPercentage: 25,
		},
		{
			name: 'Brian Galli',
			standing: 9,
			selected: false,
			lotteryPercentage: 17,
		},
		{
			name: 'Bryce Hairabedian',
			standing: 10,
			selected: false,
			lotteryPercentage: 10,
		},
		{
			name: 'Scotty Shaw',
			standing: 11,
			selected: false,
			lotteryPercentage: 8,
		},
		{
			name: 'Gianni Vernon',
			standing: 12,
			selected: false,
			lotteryPercentage: 5,
		},
	];

	runLottery() {
		// (max)  => {return Math.floor(Math.random() * Math.floor(max))};
		let draftPercentage = Math.floor(Math.random() * Math.floor(100));
		if (draftPercentage <= 35 && this.allTeams[6].selected === false) {
			console.log(draftPercentage, this.allTeams[6].name);
		} else if (
			draftPercentage > 35 &&
			draftPercentage <= 60 &&
			this.allTeams[7].selected === false
		) {
			console.log(draftPercentage, this.allTeams[7].name);
		} else if (
			draftPercentage > 60 &&
			draftPercentage <= 77 &&
			this.allTeams[8].selected === false
		) {
			console.log(draftPercentage, this.allTeams[8].name);
		} else if (
			draftPercentage > 77 &&
			draftPercentage <= 87 &&
			this.allTeams[9].selected === false
		) {
			console.log(draftPercentage, this.allTeams[9].name);
		} else if (
			draftPercentage > 87 &&
			draftPercentage <= 95 &&
			this.allTeams[10].selected === false
		) {
			console.log(draftPercentage, this.allTeams[10].name);
		} else if (
			draftPercentage > 95 &&
			draftPercentage < 100 &&
			this.allTeams[11].selected === false
		) {
			console.log(draftPercentage, this.allTeams[11].name);
		} else {
			console.log('done');
		}
	}

	nextPick() {
		// let lotteryOrder = [];
		// let pos = '';
		// if (draftPercentage <= 35 && this.allTeams[0].selected === false) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[0].name
		// 	);
		// 	this.allTeams[0].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	draftPercentage > 35 &&
		// 	draftPercentage <= 60 &&
		// 	this.allTeams[1].selected === false
		// ) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[1].name
		// 	);
		// 	this.allTeams[1].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	draftPercentage > 60 &&
		// 	draftPercentage <= 77 &&
		// 	this.allTeams[2].selected === false
		// ) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[2].name
		// 	);
		// 	this.allTeams[2].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	draftPercentage > 77 &&
		// 	draftPercentage <= 87 &&
		// 	this.allTeams[3].selected === false
		// ) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[3].name
		// 	);
		// 	this.allTeams[3].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	draftPercentage > 87 &&
		// 	draftPercentage <= 95 &&
		// 	this.allTeams[4].selected === false
		// ) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[4].name
		// 	);
		// 	this.allTeams[4].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	draftPercentage > 95 &&
		// 	draftPercentage < 100 &&
		// 	this.allTeams[5].selected === false
		// ) {
		// 	this.lotteryOrder.push(
		// 		this.currentPosition + '. ' + this.allTeams[5].name
		// 	);
		// 	this.allTeams[5].selected = true;
		// 	this.currentPosition++;
		// 	this.pick();
		// } else if (
		// 	this.allTeams[0].selected === true &&
		// 	this.allTeams[1].selected === true &&
		// 	this.allTeams[2].selected === true &&
		// 	this.allTeams[3].selected === true &&
		// 	this.allTeams[4].selected === true &&
		// 	this.allTeams[5].selected === true
		// ) {
		// 	this.pos = this.lotteryOrder.length - 1;
		// } else {
		// 	this.pick();
		// }
	}

	render() {
		const goldTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="gold-icon" />
		);
		const silverTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="silver-icon" />
		);
		const bronzeTrophyIcon = (
			<FontAwesomeIcon icon={faTrophy} className="bronze-icon" />
		);

		const finalStandings = [];
		const draftOrder = [];
		let draftPosition = this.allTeams.length;
		this.allTeams.forEach((team) => {
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

		this.allTeams.forEach((team) => {
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
		console.log(draftOrder);

		return (
			<>
				<h1 className="lottery-title">
					{this.title}
					<br />
					{/* <button
						className="button is-primary start-button"
						onClick={this.runLottery}>
						Start!
					</button> */}
				</h1>

				<div className="columns">
					<div className="column">
						<h5>{this.columnTitle[0]}</h5>
						<div className="standings">{finalStandings}</div>
					</div>
					{/* <div className="column">
						<h5>{this.columnTitle[1]}</h5>
					</div> */}
					<div className="column">
						<h5>{this.columnTitle[2]}</h5>
						<div className="standings">{draftOrder}</div>
					</div>
				</div>
			</>
		);
	}
}

export default DraftLottery;
