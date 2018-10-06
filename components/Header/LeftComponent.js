import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import {styles} from "./index";

class Left extends Component {

	state = {
		menuIsOpen: false
	};
	_pressButton = () => {
		this.setState(prevState => ({
			menuIsOpen: !prevState.menuIsOpen
		}), () => {
			this.props.handleMenuOpen(this.state.menuIsOpen)
		})
	}

	render() {
		const {menuIsOpen} = this.state;
		return (
				<View>
					<Button
							onPress={this._pressButton}
							title={null}
							icon={{name: "menu", color: 'white', style: styles.icon}}
					/>
				</View>
		);
	}
}


export default Left
