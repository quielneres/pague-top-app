import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffff;
  padding: 40px;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 10px;
  border: 0.5px solid #05147D;
`;

export const TouchableOpacity = styled.TouchableOpacity`
 
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;
