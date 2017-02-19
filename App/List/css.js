import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: { flex: 1 },

	space: {
		height: 40,
		backgroundColor: '#ddd',
	},

	body: { flex: 1 },

	listView: {
		flex: 1,
		padding: 20,
	},

	item: {
		marginTop: 0,
		marginBottom: 20,
	},
	item__wrap: {
		padding: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#999',
		backgroundColor: '#fff',
		borderRadius: 2,
	},
	item__title: {
		fontSize: 14,
		fontWeight: '600',
		color: '#111',
	},
	item__image: {
		marginTop: 5,
		width: 305,
		height: 150,
	},
});