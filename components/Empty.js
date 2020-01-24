import React from 'react';
import {Image,View, StyleSheet} from 'react-native';

var emptyImg = require('../assets/popcorn.jpg')

export default function Empty() {
    return (
        <View style = {styles.container}>
            <Image style = {styles.img} source = {emptyImg} width = {300} height={300}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 8,
        alignItems: 'center',
    },
    img: {
        
    }
    
})