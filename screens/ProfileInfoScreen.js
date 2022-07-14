import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, Touchable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
//import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
//import { ProgressView } from '@react-native-community/progress-view';
import styles from '../assets/styles/styles';
import { TouchableOpacity } from 'react-native-web';

const ProfileInfoScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '---', value: '---' },
    { label: 'weiblich', value: 'weiblich' },
    { label: 'männlich', value: 'männlich' },
    { label: 'divers', value: 'divers' },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      vorname: '',
      nachname: '',
      geschlecht: '',
      geburtsdatum: '',
      height: '',
    },
  });
  const onSubmit = (data) => {
    navigation.navigate('ProfileLipo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          {' '}
          <Image style={styles.icon} source={require('../assets/images/icon_back.png')} />
        </TouchableOpacity>

        <Text style={styles.header}>Profil vervollständigen</Text>
        <ProgressView
          progressTintColor={colors.brandSecondary}
          trackTintColor="#899AA9"
          progress={0.5}
          style={styles.progress}
        />
      </View>
      <View style={styles.card}>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>
              Vorname <Text style={styles.required}>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput style={styles.input} onChangeText={onChange} value={value} />
            )}
            name="vorname"
          />
          {errors.vorname}
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>
              Nachname <Text style={styles.required}>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput style={styles.input} onChangeText={onChange} value={value} />
            )}
            name="nachname"
          />
          {errors.nachname}
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>
              Geschlecht <Text style={styles.required}>*</Text>
            </Text>
          </View>{' '}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DropDownPicker
                style={styles.input}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeText={onChange}
                placeholder="---"
                disableBorderRadius={true}
                dropDownContainerStyle={{
                  borderColor: 'white',
                  zIndex: 1000,
                  elevation: 1000,
                  display: 'flex',
                }}
              />
            )}
            name="geschlecht"
          />
          {errors.geschlecht}
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>
              Geburtsdatum <Text style={styles.required}>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                  style={styles.input}
                  modal
                  mode="date"
                  date={date}
                  open={open}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                  maximumDate={new Date(2300, 10, 20)}
                  minimumDate={new Date(1920, 0, 1)}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="geburtsdatum"
          />
          {errors.geburtsdatum}
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>
              Größe in cm <Text style={styles.required}>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput style={styles.input} value={value} onChangeText={onChange} />
            )}
            name="height"
          />
          {errors.height}
        </View>
        <Button
          style={styles.btn}
          color="#687E92"
          title="weiter"
          onPress={() => handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
