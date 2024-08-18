import { Image, StyleSheet, Platform, View, FlatList } from 'react-native';
import React from 'react'; 
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MyComponent from '@/components/Search';
import data from '../assets/data/items.json';


export default function HomeScreen() {
  
  return (
    <ParallaxScrollView     
>
        <MyComponent/>
        <ThemedView style={styles.box}>
          <ThemedText type='title'>Today's Deals</ThemedText>
          <View style={styles.row}>
            <ThemedView style={styles.container}>
            <Image
          source={require('@/assets/images/Coat.jpg')}
          style={styles.itemPic}
        />

                <ThemedText type='subtitle'>From </ThemedText>
            </ThemedView>
            <ThemedView style={styles.container}>
            <Image
          source={require('@/assets/images/Pants.jpg')}
          style={styles.itemPic}
        />
                <ThemedText type='subtitle'>From</ThemedText>
            </ThemedView>
            <ThemedView style={styles.container}>
            <Image
          source={require('@/assets/images/Boots.jpg')}
          style={styles.itemPic}
        />
            <ThemedText type='subtitle'>From</ThemedText>
            </ThemedView>
          </View>

        </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  itemPic: {
    height: 100,
    width: 75,
    bottom: 0,
    left: 15,
    position: 'fixed',
  },
  box: {
    padding: 16,
    backgroundColor: '#000000',
    borderRadius: 10,
    height: 190,
  },
  container: {
    
    backgroundColor: '#002D04',
    borderRadius: 10,
    height: 125,
    width:105,
    marginVertical:7,
    opacity:1,
  },
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 85,
    width:105,

  },
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between items
  },
});
