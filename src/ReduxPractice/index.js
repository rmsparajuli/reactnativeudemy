import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Counter from './Counter'
import {createStore } from 'redux'
// import {Provider}  from 'react-redux'
const initialState ={
    counter:0
}

const reducer = (state=initialState, action)=>{
     return state
}

const store = createStore(reducer)
export default class ReduxPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (

        // <Provider store={store}>
            <Counter/>
        // </Provider>
    );
  }
}
