import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Header, Icon} from "react-native-elements";
import Left from "./LeftComponent";


class HeaderComponent extends Component {
	render() {
		return (
				<Header>
					<Left />
					<Center />
					<Right />
				</Header>
		)
	}
}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		paddingTop: 20
	}
})

export default HeaderComponent
