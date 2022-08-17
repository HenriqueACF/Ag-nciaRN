import React, {useState} from 'react'
import {ScrollView, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import {
    Container,
    UpperView,
    UserIconView,
    OptionsIconView,
    TextWelcome,
    TotalBalance,
    AccountView,
    Subtitle,
    BalanceValue,
    BalanceValueNotVisible,
    OptionView,
    OptionText,
    OptionIcon
} from './Header.style'

export function Header(){
    const [showBalance, setShowBalance] = useState(false)
    return(
        <>
        <Container>
            <UpperView>
                <UserIconView>
                    <Ionicons name="person-outline" size={20} color="#fff"/>
                </UserIconView>

                <OptionsIconView>
                    <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                        {showBalance
                            ? (<Ionicons name="eye-outline" size={25} color="#fff" style={{marginRight:16}}/>)
                            : (<Ionicons name="eye-off-outline" size={25} color="#fff" style={{marginRight:16}}/>)
                        }
                    </TouchableOpacity>
                    <Ionicons name="help-circle-outline" size={25} color="#fff" style={{marginRight:16}}/>
                    <Ionicons name="mail-outline" size={25} color="#fff"/>
                </OptionsIconView>
            </UpperView>
            <TextWelcome>
                Olá, Henrique
            </TextWelcome>
        </Container>
        <TotalBalance>
            <AccountView>
                <Subtitle>
                    Conta
                </Subtitle>
                <Ionicons name='chevron-forward-outline' size={25} />
            </AccountView>

            {showBalance
                ? (<BalanceValue>R$ 2345,78</BalanceValue>)
                : (<BalanceValueNotVisible/>)
            }
        </TotalBalance>
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginLeft:24, paddingRight: 50}}
            >
                <OptionView>
                    <OptionIcon>
                        <Ionicons name='md-analytics' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Pagar</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='md-cash' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Pix</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='ios-card' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Receber</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='ios-card-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Transferir</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Depositar</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>R. Celular</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Saque</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Finanças</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Finanças</OptionText>
                </OptionView>
                <OptionView>
                    <OptionIcon>
                        <Ionicons name='cash-outline' size={25} color="#fff"/>
                    </OptionIcon>
                    <OptionText>Finanças</OptionText>
                </OptionView>
            </ScrollView>
        </View>
        </>
    )
}
