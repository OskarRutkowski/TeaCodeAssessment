import {StyleSheet} from 'react-native';
import {colors} from '../utils';

const stylesContactList = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    color: colors.white,
  },
  searchContainer: {
    padding: 16,
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.lightOpacity,
  },
});

export {stylesContactList};
