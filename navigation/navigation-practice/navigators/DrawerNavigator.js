import { createDrawerNavigator } from '@react-navigation/drawer';
import { NAVIGATION } from '../constants/navigation';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name={NAVIGATION.BOTTOM_TABS} component={BottomTabNavigator} />
      <Drawer.Screen name={NAVIGATION.SETTINGS} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;