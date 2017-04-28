/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

const FirstProject = StackNavigator({
  ReactCourses: { screen: ReactCourses },
  NativeCourses: { screen: NativeCourses },
})
AppRegistry.registerComponent('FirstProject', () => FirstProject);
