import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/desk.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/desk.png') },
  { id: '3', name: 'Code', tasks: 10, image: require('./assets/desk.png') },
  { id: '4', name: 'Cook', tasks: 8, image: require('./assets/desk.png') },
  { id: '5', name: 'Party', tasks: 5, image: require('./assets/desk.png') },
  { id: '6', name: 'Travel', tasks: 6, image: require('./assets/desk.png') },
  { id: '7', name: 'Draw', tasks: 4, image: require('./assets/desk.png') },
  { id: '8', name: 'Games', tasks: 9, image: require('./assets/desk.png') },
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'Chess' },
  { id: '5', name: 'Video Games ' },
  { id: '6', name: 'Movies' },
  { id: '7', name: 'Group Meeting' },
  { id: '8', name: 'Family Dinner' },
  { id: '9', name: 'Church' },
  { id: '10', name: 'Study' },
  { id: '11', name: 'General Cleaning' },
  { id: '12', name: 'Singing Lessons' },
  { id: '13', name: 'Basketball' },
  { id: '14', name: 'Funeral' },
  { id: '15', name: 'Dental Appointment' },
];

const App = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.nav}>
        <View>
          <Text style={styles.navtext}>Hello, Devs</Text>
          <Text style={styles.Counter}>14 tasks today</Text>
        </View>
        <View>
          <Image style={styles.Icon} source={require('./assets/ProfileImage.png')} />
        </View>
      </View>
      <View style={styles.searchdiv}>
        <TextInput style={styles.Input} placeholder="Search" />
        <Image style={styles.searchIcon} source={require('./assets/mynaui_search.png')} />
        <Image style={styles.filter} source={require('./assets/Filter.png')} />
      </View>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.categoriesdiv}>
  <FlatList
    data={categories}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <View style={styles.categoryCard}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
        <Image style={styles.categoryImage} source={item.image} />
      </View>
    )}
  />
</View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 30,
  },
  navtext: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Counter: {
    fontSize: 12,
  },
  Icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchdiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  Input: {
    flex: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    backgroundColor: '#fff',
    color: 'black',
  },

  filter: {
    width: 40,
    height: 40,
  },
  categories: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesdiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 50,
    margin: 15,
    marginBottom: 10,

  },
  categoryImage: {
    width: 110,
    height: 130,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#777',
    paddingLeft: 5,
    paddingRight: 5,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 60,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E8D1BA',
  },
  taskName: {
    fontSize: 16,
  },
});
export default App