import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initNum:0
    };
  }

   increment =()=>{
    this.setState({
        initNum:this.state.initNum+1
    })
   }

   decrement =()=>{
       this.setState({
           initNum:this.state.initNum-1
       })
   }
  render() {
    return (
      <View style={{flex:1,
      justifyContent:'space-around',
      alignItems:'center',
        flexDirection:'row'
      }}>
        <TouchableOpacity onPress={this.increment}>
            <Text>
                Increment
            </Text>
        </TouchableOpacity>
        <Text>
            {this.state.initNum}
        </Text>
        <TouchableOpacity onPress={this.decrement}>
            <Text>
                Decrement
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
