import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather';

export const Container = styled.View`
   flex: 1;

`;

export const ContainerBusca = styled.View`
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 60px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 20px;

`;

export const Busca = styled.View`
    background-color:#00000070;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const Lista = styled.View`
   background-color: #00000070;
   border-radius: 20px;
   padding: 20px;
`;

export const IconSearch = styled(Icon)`
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#FFF"
})`
    width: 100%;
    font-size: 20px;
    color: #fff;
`;

export const PointsSearch = styled.View`
    position: absolute;
    top: 60%;
    width: 100%;
    height: 100%;
    background-color: #00000070;
    border-radius: 20px 20px 0 0;
    padding: 20px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #00000050;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 20px;
`

export const PointFound = styled.Text`
    color: #FFF;
    text-align: center;
`;

export const InfoPoint = styled.View`
    flex-direction: row;
    align-items: center;

`;



