import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MyCardView = styled.View `
  padding:24px;
`

export const CardBlogView = styled.View `
  flex-direction: row;
  margin-top: 24px;
`

export const CardBlogItem = styled.View `
  margin-right: 8px;
`

export const CardFunction = styled.View `
  margin: 24px 8px;
  padding: 24px;
  border: 1px solid red;
  border-radius: 10px;
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
  background-color: #101084;
  width: 130px;
  border-radius: 16px;
  align-items: center;
`
