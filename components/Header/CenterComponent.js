import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {styles} from "./index";

class Left extends Component {
	_pressButton = () => {
		Alert.alert("Working")
	}

	render() {
		return (
				<View>
					<Text style={styles.text}>TODO app</Text>
				</View>
		);
	}
}


export default Left
