import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MissedNot from '../../screens/MissedNot'
import RecentNot from '../../screens/RecentNot'

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Missed" component={MissedNot} />
      <Tab.Screen name="Recent" component={RecentNot} />
    </Tab.Navigator>
  );
}

export default TopTabs;