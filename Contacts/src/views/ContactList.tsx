import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import {Contact, Loading} from '../components';
import {fetchContacts} from '../services/get/fetchContacts';
import {ContactType} from '../types';
import {colors} from '../utils';
import {stylesContactList as styles} from './styles';
import {Text} from 'react-native-paper';
import latinize from 'latinize';

export const ContactList = () => {
  const [checked, setChecked] = useState<Array<{id: Number; checked: boolean}>>(
    [],
  );
  const [data, setData] = useState<Array<ContactType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetchContacts();
      setData(
        res.data
          .sort((a, b) => a.last_name.localeCompare(b.last_name))
          .map(record => ({
            ...record,
            avatar: record.avatar && record.avatar.split('?')[0],
            checked: false,
          })),
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleContactPress = (id: number, isChecked: boolean) => {
    const temp = [...checked];
    const foundIndex = temp.findIndex(record => record.id === id);
    if (foundIndex > -1) {
      temp[foundIndex].checked = isChecked;
    } else temp.push({id: id, checked: isChecked});
    setChecked(temp);
    console.log(
      `Checked IDs: ${temp
        .filter(record => record.checked)
        .map(record => record.id)
        .join(',')}`,
    );
  };

  const renderItem = ({item, index}: {item: ContactType; index: number}) => (
    <Contact
      item={item}
      index={index}
      handleContactPress={handleContactPress}
    />
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleButtonPress = () => {
    // Alert.alert(`Checked contacts number: ${checked.length.toString()}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#58385d" />
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Contacts</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            label="Search"
            value={search}
            onChangeText={setSearch}
            mode="outlined"
            style={{backgroundColor: 'transparent'}}
            theme={{
              colors: {
                placeholder: colors.light,
                text: colors.light,
                primary: colors.light,
              },
            }}
            right={
              <TextInput.Icon
                name="search-web"
                color={colors.light}
                onPress={handleButtonPress}
              />
            }
          />
        </View>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.container}>
            <FlatList
              data={data.filter(item => {
                if (search === '') {
                  return item;
                } else if (
                  latinize(`${item.first_name}${item.last_name}`)
                    .toLowerCase()
                    .includes(latinize(search).toLowerCase())
                ) {
                  return item;
                }
              })}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              refreshControl={
                <RefreshControl
                  colors={[colors.primary, colors.secondary]}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};
