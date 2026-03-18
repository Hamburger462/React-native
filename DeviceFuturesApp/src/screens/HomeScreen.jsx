import { View, Text, StyleSheet } from "react-native";

import ActionButton from "../components/ActionButton";

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Device Features App</Text>

            <ActionButton 
            title="Open the gallery"
            onPress={() => navigation.navigate("Gallery")} 
            />

            <ActionButton 
            title="Open the camera"
            onPress={() => navigation.navigate("Camera")} 
            />

            <ActionButton 
            title="Open the location"
            onPress={() => navigation.navigate("Location")} 
            />

            <ActionButton 
            title="Open the notifications"
            onPress={() => navigation.navigate("Notifications")} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "f8fafc",
    },
    title:{
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
    }
});