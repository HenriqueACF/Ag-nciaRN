import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  width: 100%;
  height: 25%;
  justify-content: space-around;
`
export const UpperView = styled.View`
  padding: 17% 5% 0 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const UserIconView = styled.TouchableOpacity`
  height: 35px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background-color: #ff8c00;
`
export const OptionsIconView = styled.View`
  flex-direction: row;
`

export const TextWelcome = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`
export const TotalBalance = styled.View`
  padding: 24px;
`
export const AccountView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const BalanceValue = styled.Text `
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
`

export const BalanceValueNotVisible = styled.View `
  margin-top:8px;
  height: 30px;
  width: 40%;
  background-color: #ff8c00;
  border-radius: 2px;
`

export const OptionView = styled.TouchableOpacity `
  align-items: center;
  margin-right: 8px;
`

export const OptionIcon = styled.View `
  height: ${width * 0.18}px;
  width: ${width * 0.18}px;
  background-color: #ff8c00;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`
export const OptionText = styled.Text `
  font-weight: 700;
  font-size: 14px;
`
