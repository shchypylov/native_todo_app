import React, {Component} from "react";
import {View, Text, StyleSheet, Alert} from "react-native";
import {Header, Icon, Overlay} from "react-native-elements";
import Left from "./LeftComponent";
import Center from "./CenterComponent";
import Right from "./RightComponent";


class HeaderComponent extends Component {
	state = {
		menuIsOpen: false
	}

	_handleMenu = state => {
		this.setState({
			menuIsOpen: state
		})
	}
	render() {
		const {menuIsOpen} = this.state;

		return (
				<View>
					<Header style={styles.header}>
						<Left handleMenuOpen={this._handleMenu}/>
						<Center/>
						<Right/>
					</Header>
					<Overlay
							isVisible={menuIsOpen}
							windowBackgroundColor="rgba(0, 0, 0, .5)"
							width="auto"
							height="auto"
							onBackdropPress={() => this.setState({menuIsOpen: false})}
					>
						<Text>Hello from Overlay!</Text>
					</Overlay>;
				</View>
		)
	}
}


export const styles = StyleSheet.create({
	header: {
		paddingTop: 20
	},
	view: {
		padding: 0,
	},
	button: {
		backgroundColor: "#476EC5",
	},
	icon: {
		fontSize: 20,
	},
	text: {
		color: "#fff"
	}
})

export default HeaderComponent
