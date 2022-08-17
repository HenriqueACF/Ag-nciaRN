import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {
    Container,
    TextCard
} from './MyCard.style'


export function MyCard(){
    return(
        <Container>
            <Ionicons name='card-outline' size={20} color='#fff'/>
            <TextCard>Meus Cartões</TextCard>
        </Container>
    )
}
