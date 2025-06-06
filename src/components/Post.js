import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Author from "./Author";
import Comments from "./Comments";

class Post extends Component {
  render(){
    return (
      <View
        style={styles.container}
      >
        <Image source={this.props.image} style={styles.image} />
        <Author email={"jherreiragarnica@gmail.com"} nickname={"joaoghg"} />
        <Comments comments={this.props.comments} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  }
})

export default Post
