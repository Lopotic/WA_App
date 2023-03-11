import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import colors from "./colors";



export default function MyButton(props) {
    const { onPress, pressed, title } = props;
    return (
      <Pressable onPress={onPress}  style={({ pressed }) => [{ backgroundColor: pressed ? colors.grey : 'white' }, styles.button ]}>
        <Text style={[{ color: pressed ? 'white' : colors.black }, styles.text]}>{title}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
  }); 
