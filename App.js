import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Third from './src/screens/third';
import MyLocations from './src/screens/second';
import First from './src/screens/first';
import Direction from './src/screens/third';
import RecentLocations from './src/screens/RecentLocations';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{ }} initialRouteName="first"
      >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
