import React from 'react';
import { Text, View, ActivityIndicator, TouchableHighlight } from 'react-native';

import css from './css';


export default class Footer extends React.Component {

	render() {
		const { loading, error, more, onPressMore } = this.props;

		return error ? (
			<View style={css.footer}>
				<Text style={css.error}>ERROR</Text>
			</View>
		) : (
			<View style={css.footer}>
				{loading && (
					<ActivityIndicator style={css.loading}/>
				)}
				{(more) && (
					<TouchableHighlight
						onPress={onPressMore}
						activeOpacity={.75}
						underlayColor="rgba(0,0,0,.3)">
						<View style={css.moreButton}>
							<Text style={css.moreButton__text}>더보기</Text>
						</View>
					</TouchableHighlight>
				)}
			</View>
		);
	}

}