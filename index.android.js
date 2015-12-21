/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var response = 'toto';
var bouffons = React.createClass({
  getInitialState : function() {
    return {
      contents: ''
    }
  },
  updateData : function (data) {
    this.setState({
      contents: 'toto'
    })
  },
  render: function() {
    var that = this;
    fetch('https://api.github.com/users/mralexgray/repos', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    }).then(function(response){
      that.updateData(response);
      console.log(response);
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {this.state.contents}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('bouffons', () => bouffons);
