import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Platform,
  StatusBar} 
  from 'react-native';
import { useDeviceOrientation } from  "@react-native-community/hooks"; 

export default function App() {
  const orientation = useDeviceOrientation();
  return (
    <SafeAreaView style={[styles.container, {
      height: orientation == "portrait" ?  "30%" : "100%"
    }]}>
      <View style={[flexStyle, {backgroundColor: "red"}]}> 
        <Text style={textStyle}  adjustsFontSizeToFit={true} >I love my girlfriend</Text>
      </View>
      <View style={[flexStyle, {backgroundColor: "gold"}]}>
        <Text style={textStyle}  adjustsFontSizeToFit={true} >I love my girlfriend</Text>
      </View>
      <View style={[flexStyle, {backgroundColor: "dodgerblue"}]}>
        <Text style={textStyle}  adjustsFontSizeToFit={true} >I love my girlfriend</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const textStyle = StyleSheet.create({
  textAlign: "center",
  textAlignVertical: "center",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: 25,
  fontWeight: "bold",
});

const flexStyle = StyleSheet.create({
  flex: 1,
});
