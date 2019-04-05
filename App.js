import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import ReduxPractice from './src/ReduxPractice/index'
export default class App extends Component {
  state = {
    key:Math.random(),
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://yt3.ggpht.com/a-/AAuE7mDBFM3pNj8B_D-aggZ5nczA1XNvDnJY-F8HAg=s900-mo-c-c0xffffffff-rj-k-no"
          }
        })
      };
    });
  };
 
  

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
    console.log("This is deletedhandler")
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      // <View style={styles.container}>
      //   <PlaceDetail
      //     selectedPlace={this.state.selectedPlace}
      //     onItemDeleted={this.placeDeletedHandler}
      //     onModalClosed={this.modalClosedHandler}
      //   />
      //   <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      //   <PlaceList
      //     places={this.state.places}
      //     onItemSelected={this.placeSelectedHandler}
      //   />
      // </View>
      <ReduxPractice/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
