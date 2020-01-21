/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { AugmentPlayerSDK, AugmentPlayer } from 'react-native-augment';

AugmentPlayerSDK.init({
  id:  "357fee36746668573ceb2f5957c4869ee1a62a112639bac9b0fae43c7c431692",
  key: "80ae1420e164e0440d5329067bcdd953e9fa6c63b75c001c06d169a4f11268c5"  
});

// Product JSON object
var productToSearch = {
  identifier: "84",
  brand: "Whirlpool",
  name: "Fridge",
  ean: ""
};

AugmentPlayerSDK.checkIfModelDoesExistForUserProduct(productToSearch)
.then(function (augmentProduct) {
  // Check if the Augment API found a corresponding Product
  if (!augmentProduct) {
      alert('Product not found');
      return;
  }

  // We have the augmentProduct here :)
  console.log(augmentProduct);

})
.catch(function (error) {
  // Error is a JSON object {error: string}
  alert(error.error);
});


class App extends Component {
  loader(loaderStatus) {
    // Product and AR general loading
    // This is here to allow you to give feedback to your user
    // {progress: int, show: bool}
    console.log(loaderStatus);
    this.setState({
        loaderShow: loaderStatus.show,
        loaderText: "Loading " + loaderStatus.progress + "%"
    });
  }

  business(player, error) {
      if (error) {
          console.error(error);
          return;
      }

      this.playerInstance = player;
      player.addProduct(productToSearch)
      .then(() => {
          console.log("The product has been added to the ARView");
      })
      .catch((error) => {
          console.error(error);
      });
  }

  render() {
      return (
          <AugmentPlayer style={styles.augmentPlayer}
              onPlayerReady={this.business.bind(this)}
              loaderCallback={this.loader.bind(this)}
          />
      );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
