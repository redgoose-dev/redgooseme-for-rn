import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import css from './css';


export default class Item extends React.Component {

	render() {
		const { data, onPress } = this.props;

		return (
			<TouchableHighlight
				activeOpacity={.75}
				underlayColor="rgba(0,0,0,0)"
				onPress={() => {
					if (onPress) onPress(parseInt(data.srl));
				}}
				style={css.item}>
				<View style={css.item__wrap}>
					<Text style={css.item__title}>{data.title}</Text>
					<Image
						source={{ uri: `http://goose.redgoose.me/${data.json.thumbnail.url}` }}
						style={css.item__image}/>
				</View>
			</TouchableHighlight>
		);
	}

}