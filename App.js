import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppBar from './src/components/AppBar';
import ToolBar from './src/components/ToolBar';
import Users from './src/components/Users';
import Story from './src/components/Story';
import Feed from './src/components/Feed';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
