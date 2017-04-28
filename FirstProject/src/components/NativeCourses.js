/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, Button, Image } from 'react-native';
import data from '../data/courses.json';
const ds = new ListView.DataSource({ //DataSource  - generates a List view with Data source 
	rowHasChanged : (r1, r2) => r1 !== r2 // take r1 and r2 and if they are not the same, that means the data source has changed. 
});
const dataSource = ds.cloneWithRows(data); // whatever the data has changed run this.

 export default class NativeCourses extends Component {
 	static navigationOptions = {
 		title: 'React Native Courses',
 	}
 	render() {
 		const { navigate } = this.props.navigation;
 		return (
 			<View style={styles.container}>
 				<Button
					onPress={() => navigate('ReactCourses')}
					title= 'React Courses'
 				>
 				</Button>
 				<ListView 
					dataSource={dataSource}
					renderRow={(rowData) => 
						<View>
							<Text>{rowData.title}</Text>
							<Text>{rowData.description}</Text>
							<Text>{rowData.views}</Text>
							<Button 
								onPress="/"
								title="Link to course"
							/>
							<Text>{rowData.link}</Text>
							<Image source={{url: rowData.image}}
								style={{width: 375, height: 200}}
							/>
						</View>
					}
 				/>
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