import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from "react-native";
import {ListItem, Icon} from 'react-native-elements'
import Note from "../Note";

const styles = StyleSheet.create({
	notFound: {
		padding: 20,
		width: "100%",
		textAlign: "center"
	}
});

class Notes extends Component {
	state = {
		notes: []
	};

	_addNoteHandle = (note) => {
		this.setState(prevState => ({
			notes: [...prevState.notes, note]
		}))
	};

	_deleteHandle = value => {
		const {notes} = this.state;
		const index = notes.indexOf(value);
		notes.splice(index);
		this.setState({
			notes: notes
		})
	}

	_notesRender = () => {
		const {notes} = this.state;
		return notes && notes.length ? notes.map((item, i) => {
			return (
					<ListItem
							key={i}
							leftIcon={{name: "note"}}
							title={item}
							rightIcon={<Icon onPress={() => this._deleteHandle(item)} name='delete' />}
					/>
			)
		}) : (
				<Text style={styles.notFound}>
					Start adding some notes
				</Text>
		)

	}

	render() {
		return (
				<View>
					<Note addNote={this._addNoteHandle}/>
					<ScrollView style={{paddingBottom: 20}}>
						{this._notesRender()}
					</ScrollView>
				</View>
		);
	}
}

export default Notes;
