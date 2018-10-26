'use strict';
import React, {Component} from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import SearchPage from './SearchPage';


export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

console.log(SearchPage())

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
