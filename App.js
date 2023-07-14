import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyLocations from './src/screens/second';
import First from './src/screens/first';
import Direction from './src/screens/third';
import RecentLocations from './src/screens/RecentLocations';
import LoginScreen from './src/screens/Login';
import CurrentLocation from './src/screens/CurrentLocation';
import Notifications from './src/screens/Notifications';
import TopTabs from './src/Navigation/TopNavigation/TopNav'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{ }} initialRouteName="Login"
      >
      <Stack.Screen 
         name="Login" 
         component={LoginScreen} 
         options={{headerShown: false}}
        />
      <Stack.Screen 
         name="Direction" 
         component={Direction} 
         options={{headerShown: false}}
        />
        <Stack.Screen 
           name="MyLocations" 
           component={MyLocations}
           options={{headerShown: false}}
        />
        <Stack.Screen
          name="first"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecentLocations"
          component={RecentLocations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentLocations"
          component={CurrentLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopTabs"
          component={TopTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
