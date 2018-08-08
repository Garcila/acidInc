import React, { Component } from 'react';
import './App.css';
import List from './List.js';

class App extends Component {
	state = {
		items: [
			{
				id: 0,
				title: 'Hair 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				detail: true
			},
			{
				id: 1,
				title: 'Hair 2',
				description:
					'Handlebar doctor watson. um yesbaby vincent price mustachio dali chevron lemmy, burt reynolds vincent price tony stark French café patron vincent price chevron dali doctor watson.',
				detail: false
			},
			{
				id: 2,
				title: 'Hair 3',
				description:
					'Lorreto del mar class definer handlebar Sergeant major circus strongman vincent price village people arcu',
				detail: false
			},
			{
				id: 3,
				title: 'Hair 4',
				description:
					'Sergeant major lando calrissian graeme souness ian botham derek griffiths walrus trimmed david seaman gentleman john cleese dickie davies ding-dong tache et',
				detail: false
			},
			{
				id: 4,
				title: 'Hair 5',
				description:
					'Chevron barber shop quartet top gun, felis brandy top gun worn with distinction gent brush barber shop quartet brad pitt chevron cardinal richelieu toothbrush',
				detail: false
			},
			{
				id: 5,
				title: 'Hair 6',
				description:
					'Bruce forsyth sportacus mouth coiffure bruce forsyth ned flanders will you do the fandango decathlon champion, dolor ipsum socially mobile',
				detail: false
			},
			{
				id: 6,
				title: 'Hair 7',
				description:
					'Worn with distinction testosterone trophy village people knavish rogue stache pit fighter imperial, groucho marx village people testosterone trophy imperial wario top gun pit fighter ',
				detail: false
			}
		]
	};

	showDetail = id => {
		const state = this.state.items.map(item => {
			return (item.detail = item.id === id ? true : false);
		});
		this.setState({ state });
	};

	render() {
		const allDetail = this.state.items.map(item => {
			let info = item.detail && (
				<div className="item-description">
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
			);
			return info;
		});
		return (
			<div className="App">
				<header className="app-header">
					<h1 className="App-title">Hairy</h1>
				</header>
				<List
					items={this.state.items}
					showDetail={this.showDetail}
					className="list"
				/>
				{allDetail}
			</div>
		);
	}
}

export default App;
