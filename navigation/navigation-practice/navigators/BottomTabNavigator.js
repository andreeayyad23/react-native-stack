import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION } from '../constants/navigation';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === NAVIGATION.HOME_STACK) {
            iconName = 'home';
          } else if (route.name === NAVIGATION.PROFILE) {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name={NAVIGATION.HOME_STACK} 
        component={HomeStackNavigator} 
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tab.Screen 
        name={NAVIGATION.PROFILE} 
        component={ProfileScreen} 
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;