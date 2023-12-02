import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { splashStyles } from "../styles/SplashStyles";
import Logo from "../assets/SVGComponents/Logo";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    splashNav();
  }, []);

  const splashNav = () => {
    const intervalNav = setInterval(() => {
      navigation.replace("Crypto");
      clearInterval(intervalNav);
    }, 3000);
  };

  return (
    <View className="flex-1 flex justify-center align-middle">
      <View
        className="w-full h-[30%]"
        style={[splashStyles.flexStart, splashStyles.bodyColor]}
      >
        <Text style={[splashStyles.faintedText]} className="text-start">
          COINS
        </Text>
      </View>
      <View
        className="w-full h-[40%]"
        style={[splashStyles.flexCenter, splashStyles.bodyColor]}
      >
        <Logo />
        <Text className="mt-1.5" style={[splashStyles.normalText]}>
          COINSWAY
        </Text>
        <Text className="mt-1.5" style={[splashStyles.normalText]}>
          Made by: <Text className="font-bold">DecoderAshish</Text>
        </Text>
      </View>
      <View
        className="w-full h-[30%]"
        style={[splashStyles.flexEnd, splashStyles.bodyColor]}
      >
        <Text style={[splashStyles.faintedText]} className="text-start">
          WAY
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
