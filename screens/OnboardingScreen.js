import React from 'react'
import { View, Text, Button,Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/first.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'my second app',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/wow.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'lets practice react native! ',
                }
             ]}
        />
    )
}

export default function OnboardingScreen;
