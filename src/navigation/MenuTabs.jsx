import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackKing from './StackKing';
const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MenuTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Equipos"
                component={StackKing}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
        </Tab.Navigator>
    );
}