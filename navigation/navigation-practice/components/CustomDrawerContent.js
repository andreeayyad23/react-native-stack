import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NAVIGATION } from '../constants/navigation';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>My App</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate(NAVIGATION.BOTTOM_TABS)}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate(NAVIGATION.SETTINGS)}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});