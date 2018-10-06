import React, {Component} from "react";
import {StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import Header from "../Header";

class Root extends Component {
	state = {
		test: 1
	}

	render() {
		return (
				<View>
					<Header />
					<Text>
						Hello
					</Text>
				</View>
		)
	}
}


export default Root
