import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';


import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

//
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const App = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne); //TODO: set the initial state to DiceOne

  const RollDiceBtn = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
      case 2:
        setDiceImage(DiceTwo);
      case 3:
        setDiceImage(DiceThree);
      case 4:
        setDiceImage(DiceFour);
      case 5:
        setDiceImage(DiceFive);
      case 6:
        setDiceImage(DiceSix);
      default:
        setDiceImage(DiceOne);
    }
  };

  ReactNativeHapticFeedback.trigger("impactLight", options);

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />

      <Pressable
      onPress={RollDiceBtn}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
