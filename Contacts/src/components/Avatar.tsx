import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {stylesAvatar as styles} from './styles';
import {Text} from 'react-native-paper';
import {AvatarProps} from '../types';

export const Avatar: FC<AvatarProps> = ({avatar, firstName, lastName}) => (
  <View style={styles.container}>
    {avatar ? (
      <FastImage
        style={styles.image}
        source={{
          uri: avatar,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    ) : (
      <Text style={styles.text}>
        {firstName.charAt(0)}
        {lastName.charAt(0)}
      </Text>
    )}
  </View>
);
