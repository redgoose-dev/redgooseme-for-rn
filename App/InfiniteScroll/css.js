import { StyleSheet } from 'react-native';


export default StyleSheet.create({

	viewport: {
		flex: 1,
		padding: 20,
	},

	footer: {
		paddingBottom: 20,
	},

	moreButton: {
		paddingVertical: 15,
		alignItems: 'center',
		backgroundColor: '#B31F37',
	},
	moreButton__text: {
		fontSize: 14,
		fontWeight: '600',
		color: '#fff',
	},

	loading: {
		paddingVertical: 20,
	},

	error: {
		fontSize: 16,
		fontWeight: '600',
		color: 'red',
		textAlign: 'center',
	},
});