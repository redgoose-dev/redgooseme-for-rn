import React from 'react';
import { Text, View } from 'react-native';


export default class Item extends React.Component {

	render() {
		const { data } = this.state;

		return (
			<View>
				<Text>Item component</Text>
			</View>
		);
	}

}