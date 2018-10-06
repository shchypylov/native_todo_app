import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Button, Icon} from 'react-native-elements';

// import Icon from 'react-native-vector-icons/FontAwesome';

class Left extends Component {
	_pressButton = () => {
		Alert.alert("Working")
	}
	render() {
		return (
				<Button onPress={this._pressButton} title="Test" />
		);
	}
}


export default Left
