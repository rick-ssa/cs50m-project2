import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MovieItem(props) {
    const typeIcons = {
        movie:'movie',
        series: 'playlist-play',
        episode: 'play-arrow',
        game: 'videogame-asset',
    }
    
    const colorIcons = {
        movie:'blue',
        series: 'red',
        episode: 'green',
        game: 'purple',
    }

    function handlePress() {
        props.navigation.navigate('Details',props.movie)
    }

    return (
        <TouchableOpacity 
            style = {styles.container}
            onPress = {()=>handlePress()}
        >            
            <View style = {[styles.icon,{backgroundColor:colorIcons[props.movie.Type]}]}>
                <Icon name={typeIcons[props.movie.Type]} size={40} color = 'white'></Icon>
            </View>
            <View style = {styles.details}>
                <Text style = {styles.movieName}>
                    {props.movie.Title}
                </Text>
                <View style = {styles.yearContainer}>
                    <Text style = {styles.year}>{props.movie.Year}</Text>
                    <Text style = {styles.type}>{props.movie.Type}</Text>
                </View>
            </View>           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            flexDirection: 'row',
        },
        
        icon: {
            padding: 5,
            borderRadius: 50,
            margin: 16,
        },

        details: {
            flex: 1,
            justifyContent:'center',
            paddingRight:16,
        },

        movieName: {
            fontSize: 16,
            fontWeight: 'bold',
        },

        yearContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },

        year: {
            fontSize: 14,
            color: 'gray',
            marginRight: 8,
        },

        type: {
           fontSize: 14, 
           color: 'gray',
        },
    }
)