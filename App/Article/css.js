import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	viewport: {
		flex: 1,
		padding: 10,
	},

	wrap: {
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 0,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#ccc',
		backgroundColor: '#fff',
	},

	header: {
		marginBottom: 15,
	},
	header__title: {
		fontSize: 18,
		fontWeight: '200',
		color: '#111',
	},
	header__date: {
		marginTop: 2,
		fontSize: 10,
		color: '#666',
	},

	webview: {
		flex: 1,
	},

	loading: {
		flex: 1,
		justifyContent: 'center',
	},
	loading__indicator: {
		paddingBottom: 40,
	},

});