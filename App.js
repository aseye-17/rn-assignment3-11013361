import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import { Header } from './components/header.js';

export default function App() {
  return (
    <>
    <Header />
    </>
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
