import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Zoomable from './src/screens/Zoomable';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={{fontSize: 30, fontWeight:'bold'}}>Welcome Back!</Text>
    //   <Text>This is the HomeScreen</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Zoomable/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
