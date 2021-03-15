import React from 'react'
import { View, Text, Button,Image, StyleSheet,TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <Button
        title = 'Skip'
        color="#000000"
        {...props}
    />
);
const Next = ({...props}) => (
    <Button
        title = 'Next'
        color="#000000"
        {...props}
    />
);
const Done = ({...props}) => (
    <TouchableOpacity
        style = {{marginHorizontal:8}}
        {...props}>
            <Text style = {{fontSiz:16}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
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
