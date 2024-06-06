import 'react-native-gesture-handler';
import { useFonts } from 'expo-font'
import Header from './src/components/Header'
import {SafeAreaProvider} from "react-native-safe-area-context";
import {View} from "react-native";
import Post from "./src/components/Post";

export default function App() {

    const [fontsLoaded] = useFonts({
        'shelter': require("./assets/fonts/shelter.otf")
    })

    const comments = [
      {
        nickname: 'Joana Silva',
        comment: 'Excelente Foto'
      },
      {
        nickname: 'Rafael Pereira',
        comment: 'muito ruim'
      }
    ]

    if(!fontsLoaded){
        return null
    }else{
        return (
            <SafeAreaProvider>
                <View style={{ flex: 1 }}>
                    <Header />
                    <Post
                      image={require('./assets/imgs/fence.jpg')}
                      comments={comments}
                    />
                </View>
            </SafeAreaProvider>
        )
    }
}

