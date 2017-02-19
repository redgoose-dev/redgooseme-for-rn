import React from 'react';
import { Text, View, ScrollView, ActivityIndicator, WebView } from 'react-native';

import css from './css';


export default class Article extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};

		this.loading = true;
	}

	convertData(src) {
		return src.article;
	}

	getData(srl) {
		fetch(`http://redgoose.me/ajax/?action=article&article=${srl}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((responseJSON) => {
				this.setState({
					data: this.convertData(responseJSON),
				});
			});
	}

	render() {
		const { navigate, state, goBack } = this.props.navigation;
		const { data } = this.state;

		//console.log(data);
		if (!state.params.srl)
		{
			return (
				<View style={css.loading}>
					<Text>not found srl</Text>
				</View>
			);
		}

		if (!data)
		{
			this.getData(state.params.srl);

			return (
				<View style={css.loading}>
					<ActivityIndicator style={css.loading__indicator}/>
				</View>
			);
		}

		return (
			<View style={css.viewport}>
				<View style={css.wrap}>
					{/*<View style={css.header}>*/}
						{/*<Text style={css.header__title}>{data.title}</Text>*/}
						{/*<Text style={css.header__date}>{data.regdate}</Text>*/}
					{/*</View>*/}
					<View style={{flex: 1}}>
						<WebView
							style={css.webview}
							source={{uri: `http://redgoose.me/article/${state.params.srl}/?popup=2&hud=0`}}/>
					</View>
				</View>
			</View>
		);
	}

}