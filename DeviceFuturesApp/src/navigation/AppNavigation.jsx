import { NavigationContainer, StackActions } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import GalleryScreen from "../screens/GalleryScreen"
import CameraScreen from "../screens/CameraScreen"
import LocationScreen from "../screens/LocationScreen"
import NotificationScreen from "../screens/NotificationScreen"

export default function AppNavigator(){
    <NavigationContainer>
        <StackActions.Navigator>
            <StackActions.Screen name="Home" component={HomeScreen} />
            <StackActions.Screen name="Gallery" component={GalleryScreen} />
            <StackActions.Screen name="Camera" component={CameraScreen} />
            <StackActions.Screen name="Location" component={LocationScreen} />
            <StackActions.Screen name="Notification" component={NotificationScreen} />
        </StackActions.Navigator>
    </NavigationContainer>
}