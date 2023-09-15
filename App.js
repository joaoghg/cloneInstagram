import { useFonts } from 'expo-font'
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {

    const [fontsLoaded] = useFonts({
        'shelter': require("./assets/fonts/shelter.otf")
    })

    if(!fontsLoaded){
        return null
    }else{
        return (
            <Header />
        );
    }
}

