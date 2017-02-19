import React from 'react';
import { Text, View } from 'react-native';

import css from './css';
import Item from './Item';
import InfiniteScroll from '../InfiniteScroll';


export default class List extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { navigate, state } = this.props.navigation;

		return (
			<View style={css.container}>
				<View style={css.body}>
					<InfiniteScroll
						scrollEvent={true}
						address="http://redgoose.me/ajax/?render=json&count=20&nest="
						pageParam="page"
						pageSize={10}
						delay={500}
						useMoreButton={false}
						correctionDatas={(datas) => {
							return datas.articles;
						}}
						onPressItem={(srl) => {
							navigate('Article', { srl: srl }, () => {
								console.log('action')
							});
						}}
					/>
				</View>
			</View>
		);
	}

}