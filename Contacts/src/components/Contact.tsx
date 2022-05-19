import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Text, Checkbox, TouchableRipple} from 'react-native-paper';
import {colors} from '../utils';
import {ContactProps} from '../types';
import {Avatar} from './Avatar';
import {stylesContact as styles} from './styles';

export const Contact: FC<ContactProps> = ({
  item,
  index,
  handleContactPress,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleOnPress = () => {
    setIsChecked(!isChecked);
    handleContactPress(item.id, !isChecked);
  };

  return (
    <TouchableRipple onPress={handleOnPress} rippleColor={colors.lightOpacity}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Avatar
            avatar={item.avatar}
            firstName={item.first_name}
            lastName={item.last_name}
          />
          <View style={{marginLeft: 16}}>
            <Text style={styles.title}>
              {item.first_name} {item.last_name}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              {item.email}
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            color={colors.light}
            onPress={handleOnPress}
            theme={{colors: {text: colors.light}}}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};
