import React, { Component } from 'react';

class List extends Component {
	render() {
		const { items, showDetail } = this.props;
		const listItem = items.map(item => (
			<li
				key={item.id}
				className={item.detail ? 'list-item-detail' : 'list-item'}
				onClick={() => showDetail(item.id)}
			>
				{item.title}
			</li>
		));
		return <ul className="items-list">{listItem}</ul>;
	}
}

export default List;
