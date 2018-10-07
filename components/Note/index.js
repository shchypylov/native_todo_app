import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import {Button, Overlay, Input} from "react-native-elements";

const styles = StyleSheet.create({
	overlayStyle: {
		zIndex: 1
	}
})

class Note extends Component {
	state = {
		overlayOpen: false,
		inputText: ""
	}

	_onPressHandle = () => {
		this.setState(prevState => ({
			overlayOpen: !prevState.overlayOpen
		}))
	};

	_submitHandle = () => {
		const {inputText} = this.state;
		this.props.addNote(inputText);
		this.setState({
			overlayOpen: false,
			inputText: ""
		})
	}

	_inputHandle = (value) => {
		this.setState({
			inputText: value
		})
	}

	render() {
		const {overlayOpen, inputText} = this.state;
		return (
				<View>
					<Overlay
							isVisible={overlayOpen}
							overlayStyle={styles.overlayStyle}
							containerStyle={styles.overlayStyle}
							style={styles.overlayStyle}
							onBackdropPress={() => this.setState({overlayOpen: false})}
					>
						<View>
							<Input
									value={inputText}
									placeholder='Jot down your note'
									onChangeText={(value) => this._inputHandle(value)}
							/>
							<Button title="Submit" onPress={this._submitHandle} />
						</View>
					</Overlay>;
					<Button
							title="Add note"
							onPress={this._onPressHandle}
					/>
				</View>
		);
	}
}

export default Note;
