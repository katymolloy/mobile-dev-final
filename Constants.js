import { Animated, View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const Constants = {
    SCREEN_WIDTH: Dimensions.get("screen").width,
    SCREEN_HEIGHT: Dimensions.get("screen").height,
    WINDOW_WIDTH: Dimensions.get("window").width,
    WINDOW_HEIGHT: Dimensions.get("window").height,
};

export const randomY = (screenHeight) => {
    const max = screenHeight - (screenHeight * 0.1);
    const min = screenHeight - (screenHeight * 0.9);
    const yValue = Math.floor(Math.random() * (max - min) + min)
    return yValue;
}

export default Constants;