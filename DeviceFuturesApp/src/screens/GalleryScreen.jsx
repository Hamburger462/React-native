import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker"
import ActionButton from "../components/ActionButton";

export default function GalleryScreen(){
    const [image, setImage] = useState(null);
    
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(!permissionResult.granted){
            alert("Need access to gallery");
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.mediaTypes.Image,
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.7,
        })

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Gallery</Text>
            <ActionButton title={"Choose image"} onPress={pickImage} />
            {image && <Image source={{uri: image}} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffff",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    image:{
        width: "100%",
        height: 300,
        borderRadius: 16,
        marginTop: 20,
    }
})