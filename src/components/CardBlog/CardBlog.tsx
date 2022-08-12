import React, {ReactNode} from "react";

import {Container} from './CardBlog.style'
import {Linking} from "react-native";

type Props = {
    text: ReactNode
    link: string
}

export function CardBlog({text, link}: Props){
    return(
        <Container onPress={() => Linking.openURL(link)}>
            {text}
        </Container>
    )
}
