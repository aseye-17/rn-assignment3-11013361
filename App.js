// import React from 'react';
// import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
// import { Header } from './components/header.js';

// export default function App() {
//   return (
//     <>
//     <Header />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: '',
//     padding: 16,
//     backgroundColor: '#fff',
//     width: '100%',
//   },
//   navleft: {
//     width: '90%',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     resizeMode: 'contain',
//   },
//   paragraph: {
//     fontSize: 10,
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { SearchBar } from './components/searchbar.js';
import { useState, useEffect } from'react';
import { Categories } from './components/categories.js';
import { Header } from './components/header.js';
import { Tasks } from './components/tasks.js';

export default function App() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const taskData = [
    {
    id: 1,
    title: 'Mobile development',
  },
  {
    id: 2,
    title: 'Web development',
  },
  {
    id: 3,
    title: 'Push ups',
  },
  {
    id: 4,
    title: 'UI/UX Design',
  },
  {
    id: 5,
    title: 'Yoga',
  }
  ];
  const categoriesData = [
    {
      id: 1,
      title: 'Exercise',
      tasknum: '14',
      image: require('./assets/desk.png'),
    },
    {
      id: 2,
      title: 'Study',
      tasknum: '14',
      image: require('./assets/desk.png'),
    },
    {
      id: 3,
      title: 'Eating',
      image: "",
      tasknum: '14',
    },
  ];
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#FBF9F7'}}>
    <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.container}>
          <Header />
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
          />
          <Image source={require('./assets/Filter.png')} style={styles.searchFilter}/>
        </View>
        <View>
        <Text style={styles.title}>Categories</Text>
          <Categories data={categoriesData} />
        </View>
        <View>
          <Text style={styles.title}>Ongoing Tasks</Text>
          <View style={styles.taskContainer}>
            <Tasks data={taskData} />
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    padding:10,
    marginLeft: 20
  },
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#FBF9F7',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
    searchFilter:{
      width: 50,
      height: 48,
    },
    searchBarContainer: {
      paddingHorizontal: 16,
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FBF9F7',
      width: "95%",
      alignItems: 'center',
    },
    taskContainer: {
      // alignItems: 'center',    
      backgroundColor: '#FBF9F7',
    },
});