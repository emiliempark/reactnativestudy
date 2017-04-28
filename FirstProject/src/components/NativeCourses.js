/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, Text, View, Button } from 'react-native';

 export default class NativeCourses extends Component {
 	static navigationOptions = {
 		title: 'React Native Courses',
 	}
 	render() {
 		const { navigate } = this.props.navigation;
 		return (
 			<View style={styles.container}>
 			<Text style={styles.welcome}>
 			Welcome to React Native!
 			</Text>
 			<Text style={styles.instructions}>
 			To get started, edit index.android.js
 			</Text>
 			<Text style={styles.instructions}>
 			Double tap R on your keyboard to reload,{'\n'}
 			Shake or press menu button for dev menu
 			</Text>
 				<Button
					onPress={() => navigate('ReactCourses')}
					title= 'React Courses'
 				>

 				</Button>
 			</View>
 			);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1,
 		justifyContent: 'center',
 		alignItems: 'center',
 		backgroundColor: '#F5FCFF',
 	},
 	welcome: {
 		fontSize: 20,
 		textAlign: 'center',
 		margin: 10,
 	},
 	instructions: {
 		textAlign: 'center',
 		color: '#333333',
 		marginBottom: 5,
 	},
 });