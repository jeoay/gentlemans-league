import React from 'react';
import '../styles/global.css';
import '../styles/clock.css';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			days: '-',
			hours: '-',
			minutes: '-',
			seconds: '-',
		};
	}

	componentDidMount() {
		this.tick();
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		const countDownDate = new Date('Sept 4, 2021 18:00:00').getTime();
		let now = new Date().getTime();
		let distance = new Date(countDownDate - now);

		if (distance > 0) {
			this.setState({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
		}
	}
	render() {
		return (
			<div>
				<p>
					<b>
						Time Until Draft: {this.state.days}d {this.state.hours}h{' '}
						{this.state.minutes}m {this.state.seconds}s
					</b>
				</p>
			</div>
		);
	}
}

export default Clock;
