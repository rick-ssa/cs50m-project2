import React from 'react';
import {View,FlatList, ShadowPropTypesIOS} from 'react-native';
import Item from '../components/movieItem';

export default function List(props) {
    const {search} = props

    return (
        <FlatList 
            data={search}
            renderItem ={({item})=> <Item movie = {item} navigation = {props.navigation}/>}
            keyExtractor = {item=>item.imdbID}
            ItemSeparatorComponent = {()=>(
                <View>
                    <View style={{width:'100%',height:1,backgroundColor:'gray'}}/>
                    <View style={{width:'100%',height:1,backgroundColor:'white'}}/>
                </View>
            )}
            refreshing = {true}
            initialNumToRender = {10}
        />
    )
}