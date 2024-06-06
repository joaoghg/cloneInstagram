import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Platform
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header(){

  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }
      ]}
    >
      <View style={styles.rowContainer}>
        <Image source={require('../../assets/imgs/icon.png')} style={styles.image} />
        <Text style={styles.title}>Clone Insta</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20: 0,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
})
