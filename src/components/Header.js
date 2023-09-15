import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Platform
} from "react-native";

export default class Header extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={require('../../assets/icon.png')} style={styles.image} />
                    <Text style={styles.title}>Clone Insta</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20: 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: 'center'
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
