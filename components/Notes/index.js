import React, {Component} from 'react';
import {View, Text} from "react-native";
import { ListItem } from 'react-native-elements'
import Note from "../Note";

class Notes extends Component {
	state = {
		notes: []
	};

	_addNoteHandle = (note) => {
		this.setState(prevState => ({
			notes: [...prevState.notes, note]
		}))
	};

	_notesRender = () => {
		const {notes} = this.state;
		return notes && notes.length ? notes.map((item, i) => {
			return (
					<ListItem
							key={i}
							leftIcon={{name: "note"}}
							title={item}
					/>
			)
		}) : (
				<View>
					<Text>
						Start adding some notes
					</Text>
				</View>
		)

	}

	render() {
		return (
				<View>
					<Note addNote={this._addNoteHandle}/>
					<View>
						{this._notesRender()}
					</View>
				</View>
		);
	}
}

export default Notes;
