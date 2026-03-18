import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import ActionButton from "../components/ActionButton";

export default function CameraScreen(){
    const [permission, requestPermission] = useCameraPermissions();

    const cameraRef = useRef(null);

    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        if(!permission){
            return
        }
    }, [permission]);

    const takePhoto = async () => {
        if(!cameraRef.current) return;

        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.7,
        });

        setPhotoUrl(photo.uri);
    }

    if(!permission.granted){
        return(
            <View style={styles.center}>
                <Text style={styles.title}>No access to camera</Text>
                <ActionButton title={"Allow access"} onPress={requestPermission}></ActionButton>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Camera
            </Text>
            <CameraView ref={cameraRef} style={styles.camera} facing="back" />
            <ActionButton title={"Take a photo"} onPress={takePhoto}/>
            {photoUrl && <Image source={{uri: photoUrl}} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#ffff",
    },
});