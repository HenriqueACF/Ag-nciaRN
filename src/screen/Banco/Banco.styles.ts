import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MyCardView = styled.View `
  padding:20px;
`

export const CardBlogView = styled.View `
  flex-direction: row;
  margin-top: 20px;
`

export const CardBlogItem = styled.View `
  margin-right: 8px;
`

export const CardFunction = styled.View `
  margin: 15px 8px;
  padding: 10px;
`

export const CardFunctionRow = styled.View `
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const Touchable = styled.TouchableOpacity `
  padding: 8px;
  margin-top: 8px;
  background-color: #204ac8;
  width: 130px;
  border-radius: 16px;
  align-items: center;
`
