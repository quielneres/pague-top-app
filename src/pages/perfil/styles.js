import styled from 'styled-components/native';
import {StyleSheet} from "react-native";
import fonts from "../../components/styles/fonts";
import colors from "../../components/styles/colors";

export const Image = styled.Image`
   width: 50px;
   height: 50px;
   border-radius: 100px;
`;

export const UserName = styled.Text`
  text-align: left;
   font-size: ${fonts.bigger};
   font-weight: bold;
   color: ${colors.regular};
`;

export const TextItens = styled.Text`
   text-align: left;
   font-size: ${fonts.big};
   color: ${colors.regular};
`;

export const TextDescription = styled.Text`
   font-size: ${fonts.regular};
   color: ${colors.regular};
`;

export const View = styled.View`
`;

export const TouchableOpacity = styled.TouchableOpacity`
 width: 100%;
 flex-direction: row;
 
`;

export const Style = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },
    left: {
        alignItems: 'center'
    },
    leftIcon: {

    },
    general_list: {
        marginTop: 20,
    },

    leftInfo: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: 15
    },


});

