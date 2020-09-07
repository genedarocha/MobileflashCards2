/*

File: Index.js

Desc: File to Add the Card to the Deck Pack
Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 7th September 2020

*/
import { newCard, newDeck } from '../utils/api'

export const PICK_DECKS = "PICK_DECKS"
export const NEW_ADD_CARD = "NEW_ADD_CARD"
export const NEW_ADD_DECK = "NEWS_ADD_DECK"

export function pickDecks(decks){
    return {
        type:PICK_DECKS,
        decks
    }
}

export function addDeck(deck){
    return {
        type:NEW_ADD_DECK,
        deck
    }
}

export function addCard(deckId, card){
    return {
        type:NEW_ADD_CARD,
        deckId,
        card
    }
}