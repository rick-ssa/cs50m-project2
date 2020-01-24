import React from 'react';
import {Image,View, StyleSheet} from 'react-native';

var loadingImg = require('../assets/loading.gif')

export default function Loading() {
    return (
        <View style = {styles.container}>
            <Image source = {loadingImg} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 80,
            alignItems: 'center',
        },
    }
)