/*

File: GetListofDecks.js

Desc: File to list out and display the decks as setup.

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 06 Sept 2020

*/


import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { getAllDecks } from '../utils/api'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { pickDecks } from '../actions'

class GetMyListofDecks extends Component {

    componentDidMount () {
        this.retrieveDecks()
    }

    retrieveDecks(){
        const { dispatch } = this.props
        getAllDecks()
            .then((decks)=>{
                dispatch(pickDecks(decks))
            })
    }


    render() {
        const { navigate } = this.props.navigation
        const {decks}= this.props
            return (
            decks !== null ?
            ( <ScrollView>
                <View style={styles.container}>
                {Object.keys(decks).map((deck)=>{
                return(
                    <View style={styles.card} key={deck}>
                    <TouchableOpacity
                    onPress={() => navigate(('Deck'), {deckId:deck})}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#7b68ee', 
                    textAlign: 'center',padding: 15}}> 
                    {decks[deck].title}
                    </Text>
                    <Text style={{textAlign: 'center'}}> 
                    Number of cards : {decks[deck].questions.length}
                    </Text>
                    </TouchableOpacity>
                    </View>
                )
                }
                )
                }
                </View>
                </ScrollView>
                )
                : 
                (
                <View style={styles.container}>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                There is no deck, please add deck </Text>
                </View>
                )
            )
        }
    }

function mapStateToProps (decks){
    return{
        decks
    }
}

export default withNavigation(connect(mapStateToProps)(GetMyListofDecks))

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
},
card:{
    margin:15,
    width:310,
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
    height:150,
    borderRadius:8,
    borderColor:'#ccc',
    borderWidth:0.2,
    backgroundColor:'#00FF00',
    shadowColor:'rgba(80, 0, 255, .8)',
    shadowOffset: {
        width: 3,
        height: 12,
    },
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 16,
    }
})