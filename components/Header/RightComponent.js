import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, Linking} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {styles} from "./index";

class Left extends Component {
	_pressButton = () => {
		Linking.openURL('https://github.com/shchypylov')
	}

	render() {
		return (
				<Button
						onPress={this._pressButton}
						title={null}
						icon={{name: "whatshot", color:'white', style: styles.icon}}
				/>
		);
	}
}


export default Left
