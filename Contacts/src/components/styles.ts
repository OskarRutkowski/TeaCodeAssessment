import {StyleSheet} from 'react-native';
import {colors} from '../utils';

const stylesAvatar = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  container: {
    height: 56,
    width: 56,
    backgroundColor: colors.light,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },
});

const stylesContact = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 73,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    color: colors.light,
  },
});

const stylesLoading = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {stylesAvatar, stylesContact, stylesLoading};
