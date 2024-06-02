Name : Fulbert Aseye Kemeh
ID : 11013361
Assignmnet : rn-assignmnet3


Project Overview
This React Native project is a task management application designed to help users organize their daily activities. The application displays a greeting, a count of today's tasks, a search bar, categories of tasks, and a list of ongoing tasks. The components and styles are meticulously structured to provide a clean and intuitive user interface.

Components
App Component
The App component is the main component that renders the entire application. It includes the navigation bar, search bar, categories, and ongoing tasks.

Navigation Bar: Displays a greeting message, today's task count, and a profile icon.
Search Bar: Allows users to search for tasks.
Categories: A horizontal list of task categories.
Ongoing Tasks: A vertical list of ongoing tasks.

Data
Two arrays are used to hold the categories and ongoing tasks data:
categories: An array of objects, each representing a task category with an id, name, task count, and image.
ongoingTasks: An array of objects, each representing an ongoing task with an id and name.

Styles
The application uses StyleSheet to define the styles for various components.

Components Breakdown
ScrollView: The main container that allows vertical scrolling of the entire application content.
View: Used to create the navigation bar, search bar, and categories sections.
Text: Displays text content such as greetings, task counts, and section titles.
Image: Displays images for profile icons, search icons, filter icons, and category images.
TextInput: Provides the search input field.
FlatList: Renders the categories and ongoing tasks in a list format.

![Screenshot 2024-06-02 201233](https://github.com/aseye-17/rn-assignment3-11013361/assets/151396533/04e59cc2-e062-45d3-94a8-7d4047244a2f)
