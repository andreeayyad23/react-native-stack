import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants/navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={NAVIGATION.HOME} 
        component={HomeScreen} 
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen 
        name={NAVIGATION.DETAILS} 
        component={DetailsScreen} 
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;