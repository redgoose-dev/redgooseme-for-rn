import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import List from './List';
import Article from './Article';


let activeArticle = null;

const App = StackNavigator({
	List: {
		screen: List,
		navigationOptions: {
			title: 'Articles list',
		},
	},
	Article: {
		screen: Article,
		path: '/article/:srl',
		navigationOptions: {
			title: 'Article detail',
		},
	},
}, {
	initialRouteName: 'List',
	navigationOptions: {
		header: {
			style: {
				backgroundColor: 'white',
			},
			titleStyle: {
				color: '#B31F37',
			},
		},
	},
	cardStyle: {
		backgroundColor: '#f5f5f5',
	},
});

App.prototype.componentWillUpdate = function(props, state)
{
	const route = state.nav.routes[state.nav.index];
};
// App.prototype.componentDidUpdate = function(prevProps, prevState)
// {
// 	console.log('componentDidUpdate', prevProps, prevState);
// };


export default App;