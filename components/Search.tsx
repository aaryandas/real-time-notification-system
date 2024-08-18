import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar} // Apply custom styles here
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centers content vertically
      
    },
    searchbar: {
      height: 55, // Adjust the height of the Searchbar
      borderRadius: 30, // Optional: add border radius if needed
      elevation: 5, // Optional: add shadow for elevation
      marginTop: 40, // Adjust margin to move it down from the top
    },
  });
export default MyComponent;