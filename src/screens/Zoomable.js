import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function Zoomable() {
    return (
        <View style={styles.container}>
            <ReactNativeZoomableView 
            maxZoom={10}
            minZoom={0.3}
            initialZoom={0.8}
            >
                <View style={{backgroundColor:'#191970', height: 500, width: 500, alignItems:'center'}}>
                    <Text style={{fontSize: 30, fontWeight:'bold', paddingTop:30, color:'#fff'}}>Welcome Back!</Text>
                    <Text style={{color:'#FF0000', fontWeight:'bold'}}>This is the SongScreen</Text>
                </View>
            </ReactNativeZoomableView>
        </View>
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

//hay que tener en cuenta que hay que hacer que el maximo zoom sea igual a la 