import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('./images/circle.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('./images/circle.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
             ]}
        />
    )
}

export default function OnboardingScreen;
