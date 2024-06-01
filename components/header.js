import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';


export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.navleft}>
        <Text style={styles.header}>Hello, Devs!</Text>
        <Text style={styles.paragraph}>14 tasks today</Text>
      </View>   
      <view style={styles.navright}> 
        <Image
            source={ require('../assets/Profile Image.png')} 
            style={styles.logo}/>
      </view>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: '',
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
  },
  navleft: {
    width: '90%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  paragraph: {
    fontSize: 10,
  },
});
