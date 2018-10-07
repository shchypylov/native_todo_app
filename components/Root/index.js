import React, {Component} from "react";
import {StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import Header from "../Header";
import Notes from "../Notes";

class Root extends Component {
	state = {
		test: 1
	}

	render() {
		return (
				<View>
					<Header />
					<Notes />
				</View>
		)
	}
}


export default Root
