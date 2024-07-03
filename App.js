import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TouchableHighlight, 
  Button,
  Alert,
  Platform,
  Dimensions,
  useWindowDimensions} 
  from 'react-native';
import { useDeviceOrientation} from  "@react-native-community/hooks";

let bgcolor = "white";

const buttonPress = (text) => {
  console.log("Button ", text, "pressed!");
};

export default function App() {
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={
        () => {alert("Button text pressed"); 
        console.log("Text pressed!")}}>
          Hello World!
          </Text>
      <TouchableHighlight onPress={() => {console.log("Image pressed!")}}>
        <Image 
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"}}>
        </Image>
      </TouchableHighlight>
      
      <Button 
        title='This is a Button' 
        onPress={() => {Alert.alert("Alert Title", "Alert Message", 
          [{ text: "Yes", onPress: () => {Alert.alert("Mes", "Yes pressed")}},
            { text: "No", onPress: () => {alert("No pressed")}}
        ]),
        console.log(Dimensions.get("screen"))
      }
      }
        color="orange"

      />
      <View style={viewStyles.container}>
        <Button title="View Button" onPress={() => {
          viewStyles.container.backgroundColor = "orange",
          Alert.alert("View alert", "View clicked");
        }}/>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgcolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const viewStyles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: "red",
    height: "30%",
    width: "50%",
  }
});


