import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import {Button, Overlay, Input} from "react-native-elements";

const styles = StyleSheet.create({
	overlayStyle: {
		width: "100%",
		height: "auto",
	},
	innerStyle: {
		width: "100%",
		height: "auto",
		paddingBottom: 20
	},
	inputWrap: {
		width: "100%",
		marginBottom: 20
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
							style={styles.innerStyle}
							onBackdropPress={() => this.setState({overlayOpen: false})}
					>
						<View>
							<Input
									value={inputText}
									containerStyle={styles.inputWrap}
									placeholder='Jot down your note'
									onChangeText={(value) => this._inputHandle(value)}
							/>
							<Button
									title="Submit"
									buttonStyle={{
										backgroundColor: "#e24747",
									}}
									onPress={this._submitHandle} />
						</View>
					</Overlay>;
					<Button
							title={overlayOpen ? "Close" : "Add note"}
							onPress={this._onPressHandle}
					/>
				</View>
		);
	}
}

export default Note;
