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
      <Text style={{
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}  adjustsFontSizeToFit={true}>This is a text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
