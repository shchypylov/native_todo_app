import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, Linking} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import {styles} from "./index";

class Left extends Component {
	state = {
		menuIsOpen: false
	};
	_pressButton = () => {
		Linking.openURL('https://www.upwork.com/freelancers/~0197a9237b637a8644');
		this.setState(prevState => ({
					menuIsOpen: !prevState.menuIsOpen
				}),
				// () => {
				// 	this.props.handleMenuOpen(this.state.menuIsOpen)
				// }
		)
	}

	render() {
		const {menuIsOpen} = this.state;
		return (
				<View>
					<Button
							onPress={this._pressButton}
							title={null}
							icon={{name: "favorite", color: 'white', style: styles.icon}}
					/>
				</View>
		);
	}
}


export default Left
