import React from 'react';
// Use TO to make a rounded button
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const RoundedButton = ({
  // These are parameters in this function and they are defaulted as such
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    // Make sure to add the onpress on the button as well. This error is aids.
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

// This will create the style sheet on each render cycle but it is better to do this out here
const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });
