import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface MCQProps {
  userName: string;
  userIcon: string;
  contentDescription: string;
}

const MCQ: React.FC<MCQProps> = ({userName, userIcon, contentDescription}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: userIcon}} style={styles.userIcon} />
      <Text>{userName}</Text>
      <Text>{contentDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default MCQ;
