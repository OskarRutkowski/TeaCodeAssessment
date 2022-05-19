import React, {FC} from 'react';
import {View} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import {LoadingProps} from '../types';
import {colors} from '../utils';
import {stylesLoading as styles} from './styles';

export const Loading: FC<LoadingProps> = ({
  size = 60,
  color = colors.white,
}) => (
  <View style={styles.container}>
    <WaveIndicator color={color} size={size} />
  </View>
);
