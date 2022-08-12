import React from 'react'
import {ScrollView, StyleSheet} from "react-native";

import {
    Container,
    MyCardView,
    CardBlogView,
    CardBlogItem
} from './Banco.styles'
import {Header} from "../../components/Header/Header";
import {MyCard} from '../../components/Card/MyCard'
import {CardBlog} from "../../components/CardBlog/CardBlog";
import {Text} from "react-native";

export function Banco(){
    return(
        <Container>
            <Header/>
            <MyCardView>
                <MyCard/>
            </MyCardView>

            <CardBlogView>
                <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal:24}}
                    showsHorizontalScrollIndicator={false}
                >
                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Conheça os nossos serviços, que cabem no seu bolso</Text>}
                        />
                    </CardBlogItem>

                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Consorcio para realizar o sonho da casa propria</Text>}
                        />
                    </CardBlogItem>

                    <CardBlogItem>
                        <CardBlog
                            link='https://www.google.com/'
                            text={<Text style={styles.text}>Financiamento estudantil para fazer o curso dos seus sonhos
                                ou terminar aquela tão desejada especialização</Text>}
                        />
                    </CardBlogItem>
                </ScrollView>
            </CardBlogView>
        </Container>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#ccc'
    }
})
