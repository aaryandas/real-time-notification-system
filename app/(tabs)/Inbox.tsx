import { StyleSheet, Image, useColorScheme, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabTwoScreen() {

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const iconColor = isDarkMode ? '#FFFFFF' : '#000000';
  
  const screenWidth = Dimensions.get('window').width;

  // Define your font size based on screen width
  const titleFontSize = screenWidth < 800 ? 18 : 22;
  const messageFontSize = screenWidth < 800 ? 14 : 16;

  return (
    <ThemedView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}>
      <ThemedText style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000', fontSize: titleFontSize }]}>
        Shop messages
      </ThemedText>
      <ThemedView style={styles.contentContainer}>
        <Image 
          // source={require('@/assets/images/shop-bag-icon.png')} 
          style={styles.icon}
        />
        
        <FontAwesome name="shopping-bag" size={50} color={iconColor}  />
        <ThemedText style={[styles.message, { color: isDarkMode ? '#CCCCCC' : '#666666', fontSize: messageFontSize, paddingTop: 25, paddingBottom: 100 }]}>
          Messages and updates will be shown here
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    width: '100%',  // Ensure full width
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },


  message: {
    textAlign: 'center',
  },
});
