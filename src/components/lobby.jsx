import React, { Component } from 'react';
import { useState } from 'react';
import DraftLottery from './draft-lottery';
import Clock from './clock';
import FinalStandings from './final-standings';
import DraftOrder from './draft-order';

class Lobby extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: true,
		};
	}

	columnTitle = ['2020 Final Standings:', '2021 Draft Order:'];
	currentMode = 'Test';
	secondaryMode = 'Live';
	cssMode = 'hero is-warning is-small';

	render() {
		const { data } = this.state;
		return (
			<>
				<header className="App-header">
					<section className={this.cssMode}>
						<div className="hero-body">
							<p className="title">{this.currentMode} mode!</p>
							<p className="subtitle">Switch to {this.secondaryMode} mode.</p>
						</div>
					</section>
					<h1>2021 Gentleman's League of Fantasy Football</h1>
					<Clock />
					<h1>
						{this.title}
						<br />
					</h1>
				</header>
				<section className="section is-medium">
					<DraftLottery runLottery={data} />
					<div className="columns">
						<div className="column">
							<h5>{this.columnTitle[0]}</h5>
							<FinalStandings />
						</div>
						<div className="column">
							<h5>{this.columnTitle[1]}</h5>
							<DraftOrder />
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Lobby;
