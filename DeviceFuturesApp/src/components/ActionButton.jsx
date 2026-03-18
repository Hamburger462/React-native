import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionButton({title, onPress}){
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#24599D",
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginBottom: 12,
    },

    text:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
    }
})