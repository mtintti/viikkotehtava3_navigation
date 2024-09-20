import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


function Secondscreen() {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Secondscreen; 