import React, { Component } from 'react';
import allTeams from '../module/teams';
import '../styles/global.css';
import '../styles/draft-lottery.css';

class DraftLottery extends Component {
	constructor(context) {
		super(context);
		this.runLottery = this.runLottery.bind(this);
		console.log(this.props);
	}
	draftOrder = [];
	runLottery() {
		// (max)  => {return Math.floor(Math.random() * Math.floor(max))};
		let draftPercentage = Math.floor(Math.random() * Math.floor(100));
		if (draftPercentage <= 35 && allTeams[6].selected === false) {
			console.log(draftPercentage, allTeams[6].name);
			allTeams[6].selected = true;
			this.draftOrder.push(allTeams[6]);
			this.runLottery();
		} else if (
			draftPercentage > 35 &&
			draftPercentage <= 60 &&
			allTeams[7].selected === false
		) {
			console.log(draftPercentage, allTeams[7].name);
			allTeams[7].selected = true;
			this.draftOrder.push(allTeams[7]);
			this.runLottery();
		} else if (
			draftPercentage > 60 &&
			draftPercentage <= 77 &&
			allTeams[8].selected === false
		) {
			console.log(draftPercentage, allTeams[8].name);
			allTeams[8].selected = true;
			this.draftOrder.push(allTeams[8]);
			this.runLottery();
		} else if (
			draftPercentage > 77 &&
			draftPercentage <= 87 &&
			allTeams[9].selected === false
		) {
			console.log(draftPercentage, allTeams[9].name);
			allTeams[9].selected = true;
			this.draftOrder.push(allTeams[9]);
			this.runLottery();
		} else if (
			draftPercentage > 87 &&
			draftPercentage <= 95 &&
			allTeams[10].selected === false
		) {
			console.log(draftPercentage, allTeams[10].name);
			allTeams[10].selected = true;
			this.draftOrder.push(allTeams[10]);
			this.runLottery();
		} else if (
			draftPercentage > 95 &&
			draftPercentage < 100 &&
			allTeams[11].selected === false
		) {
			console.log(draftPercentage, allTeams[11].name);
			allTeams[11].selected = true;
			this.draftOrder.push(allTeams[11]);
			this.runLottery();
		} else {
			if (this.draftOrder.length < 6) {
				console.log('Skipped');
				this.runLottery();
			} else {
				return this.draftOrder;
			}
		}
	}

	render() {
		return (
			<>
				<div className="columns">
					<div className="column">
						<button
							className="button is-primary is-light is-medium is-fullwidth start-button"
							onClick={this.runLottery}>
							Run Lottery
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default DraftLottery;
