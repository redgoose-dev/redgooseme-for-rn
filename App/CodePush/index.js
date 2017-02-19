import React from 'react';
import { Text, View, Alert, AppState } from 'react-native';
import codePush from "react-native-code-push";

import css from './css.js';


export default class CodePush extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			syncMessage: null,
			progress: null,
		};
	}

	codePushSync() {
		try {
			codePush.sync(
				{
					updateDialog: {
						title: '새로운 업데이트가 존재합니다.',
						optionalUpdateMessage: '지금 업데이트 하시겠습니까?',
						mandatoryContinueButtonLabel: '계속',
						mandatoryUpdateMessage: '업데이트를 설치해야 사용할 수 있습니다.',
						optionalIgnoreButtonLabel: '나중에',
						optionalInstallButtonLabel: '업데이트',
					},
					installMode: codePush.InstallMode.IMMEDIATE,
				},
				(syncStatus) => {
					console.log(syncStatus);
					switch(syncStatus)
					{
						case codePush.SyncStatus.CHECKING_FOR_UPDATE:
							this.setState({
								syncMessage: "Checking for update."
							});
							break;
						case codePush.SyncStatus.DOWNLOADING_PACKAGE:
							this.setState({
								syncMessage: "Downloading package."
							});
							break;
						case codePush.SyncStatus.AWAITING_USER_ACTION:
							this.setState({
								syncMessage: "Awaiting user action."
							});
							break;
						case codePush.SyncStatus.INSTALLING_UPDATE:
							this.setState({
								syncMessage: "Installing update."
							});
							break;
						case codePush.SyncStatus.UP_TO_DATE:
							this.setState({
								syncMessage: "App up to date.",
								progress: false
							});
							break;
						case codePush.SyncStatus.UPDATE_IGNORED:
							this.setState({
								syncMessage: "Update cancelled by user.",
								progress: false
							});
							break;
						case codePush.SyncStatus.UPDATE_INSTALLED:
							this.setState({
								syncMessage: "Update installed and will be run when the app next resumes.",
								progress: false
							});
							break;
						case codePush.SyncStatus.UNKNOWN_ERROR:
							this.setState({
								syncMessage: "An unknown error occurred.",
								progress: false
							});
							break;
					}
				},
				(progress) => {
					this.setState({ progress });
				},
			)
		} catch (error) {
			Alert.alert('오류', '업데이트 과정에 오류가 발생했습니다.');
			codePush.log(error);
		}
	}

	componentDidMount() {
		this.codePushSync();
		AppState.addEventListener('change', (state) => {
			(state === 'active') && this.codePushSync();
		});
	}

	render() {
		const { progress, syncMessage } = this.state;
		if (!progress)
		{
			return null;
		}

		let syncView = (syncMessage) ? (
			<View style={css.message}>
				<Text>{syncMessage}</Text>
			</View>
		) : null;
		let progressView = (
			<View style={css.progress}>
				<Text>{this.state.progress && parseInt((this.state.progress.receivedBytes/this.state.progress.totalBytes)*100)}%</Text>
			</View>
		);

		return (
			<View style={css.viewport}>
				{progressView}
				{syncView}
			</View>
		);
	}

}