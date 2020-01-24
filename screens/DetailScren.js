import React, {useState, useEffect} from 'react';
import {SafeAreaView,View,Text, StyleSheet,ScrollView, Image} from 'react-native';

const axios = require('axios').default

export default function DetailScreen(props) {
    const defaultPoster = 'https://www.radioprogresso.com.br/wp-content/uploads/2018/10/cinema.jpg'
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://omdbapi.com/?i=${props.navigation.getParam('imdbID',0)}&apikey=b381aa69&page=1`)
        .then(response=>{
            setMovieDetails(response.data)
        })
        .catch(error=>console.log(error))
        .finally(()=>{
            console.log(props.navigation.getParam('imdbID',0))
        })
    },[])
    return (
    <SafeAreaView style = {styles.container}>
        <ScrollView style = {{flex:1}}>
            <Image style = {styles.img} source = {{uri:!(movieDetails.Poster==='N/A') ? movieDetails.Poster : defaultPoster}}/>
            <View style = {styles.information}>
                <Text style = {styles.title}>{movieDetails.Title}</Text>
                <Text style = {[styles.plot, styles.fontDefault]}> {movieDetails.Plot} </Text>
                <Text style = {[styles.fontDefault]}>Year: {movieDetails.Year}</Text>
                <Text style = {[styles.fontDefault]}>Actors: {movieDetails.Actors}</Text>
                <Text style = {[styles.fontDefault]}>Country: {movieDetails.Country}</Text>
                <Text style = {[styles.fontDefault]}>Language: {movieDetails.Language}</Text>
                <Text style = {[styles.fontDefault]}>Awards: {movieDetails.Awards}</Text>
            </View>
        </ScrollView>
        
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        paddingLeft: 24,
        paddingRight: 24,
    },
    img: {
        width:300,
        height: 450,
        alignSelf: 'center',
    },
    information: {
        flex:1,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding:15,
        fontWeight: 'bold',
    },
    fontDefault: {
        color: 'white',
        fontSize: 16,
        paddingBottom: 15,
    },
    plot: {
        textAlign: 'justify',
    },
    language: {

    }

})