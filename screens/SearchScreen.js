import React, {useState, useEffect} from 'react';
import {SafeAreaView,View,Text,TextInput,FlatList, StyleSheet} from 'react-native';
import List from '../components/List'
import Loading from '../components/Loading'
import Empty from '../components/Empty'

const axios = require('axios').default

const SearchScreen = props => {
    const [text,setText] = useState('')
    const [search,setSearch] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        let bigSearch = []
        
        axios.all([getPage1(),getPage2()])
            .then(axios.spread(function(page1,page2){
                console.log(page1.data)
                if(page1.data.Response){
                    bigSearch = page1.data.Search
                    if(page2.data.Response) {
                        bigSearch = [...bigSearch, ...page2.data.Search]
                    }
                }
            }))
            .catch(error=>{
                console.log(error.response.status)
            })
            .finally(()=>{
                setSearch(bigSearch)
                setLoading(false)
              }
            )
        
    },[text])

    function getPage1() {
        return axios.get(`http://omdbapi.com/?s=${text}*&apikey=b381aa69&page=1`);
    }

    function getPage2() {
        return axios.get(`http://omdbapi.com/?s=${text}*&apikey=b381aa69&page=2`);
    }

    

    function handleText(e) {
        setLoading(true)
        setText(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = 'movie name'
                autoCapitalize = 'words'
                value = {text}
                onChangeText = {(e)=>handleText(e)}
            />
            
            {loading ? <Loading/>: search && search[0] ? <List navigation = {props.navigation} search = {search} /> : <Empty />}
        </SafeAreaView>
    )
}

SearchScreen.navigationOptions = {
    title: 'Search Screen',
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: 'white',
        },
        input: {
            borderWidth: 1,
            borderColor: 'lightblue',
            padding: 5,
            borderRadius: 5,
            margin: 20,
            backgroundColor: 'white'
        }
    }
)

export default SearchScreen;