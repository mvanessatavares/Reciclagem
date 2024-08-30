import React from 'react';
import {styles} from './styles';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ButtonSocialGoogle: React.FC = () => {
    return (
        <TouchableOpacity style={styles.Button}>
            <FontAwesome name="google" size={24} color="black"/>
        </TouchableOpacity>
    );
}

export {ButtonSocialGoogle};