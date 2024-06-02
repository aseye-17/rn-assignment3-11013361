import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/desk.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/desk.png') },
  { id: '3', name: 'Code', tasks: 10, image: require('./assets/desk.png') },
  { id: '4', name: 'Cook', tasks: 8, image: require('./assets/desk.png') },
  { id: '5', name: 'Read', tasks: 5, image: require('./assets/desk.png') },
  { id: '6', name: 'Write', tasks: 6, image: require('./assets/desk.png') },
  { id: '7', name: 'Meditate', tasks: 4, image: require('./assets/desk.png') },
  { id: '8', name: 'Play', tasks: 9, image: require('./assets/desk.png') },
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Database Management' },
  { id: '4', name: 'UI/UX Design' },
  { id: '5', name: 'Backend Integration' },
  { id: '6', name: 'Frontend Development' },
  { id: '7', name: 'Code Review' },
  { id: '8', name: 'Testing and QA' },
  { id: '9', name: 'Documentation' },
  { id: '10', name: 'Deployment' },
  { id: '11', name: 'API Development' },
  { id: '12', name: 'Security Assessment' },
  { id: '13', name: 'Performance Optimization' },
  { id: '14', name: 'Feature Planning' },
  { id: '15', name: 'Client Meeting' },
];