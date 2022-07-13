import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

const ProfileInfoScreen = () => {
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
      größe: '',
    },
  });
  const onSubmit = (data) => {
    navigation.navigate('ProfileLipo');
  };

  return (
    <View>
      <Text>Profil vervollständigen</Text>

      <ScrollView>
        <View>
          <View>
            <Text>Was trifft auf Dich zu?</Text>
          </View>
          <View>
            <Text>
              Vorname <Text>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vorname"
          />
          {errors.vorname}
        </View>
        <View>
          <View>
            <Text>
              Nachname <Text>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="nachname"
          />
          {errors.nachname}
        </View>
        <View>
          <View>
            <Text>
              Geschlecht <Text>*</Text>
            </Text>
          </View>{' '}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="geschlecht"
          />
          {errors.geschlecht}
        </View>
        <View>
          <View>
            <Text>
              Geburtsdatum <Text>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RNDateTimePicker
                display="spinner"
                date={date}
                onDateChange={setDate}
                maximumDate={new Date(2300, 10, 20)}
                minimumDate={new Date(1920, 0, 1)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="geburtsdatum"
          />
          {errors.geburtsdatum}
        </View>
        <View>
          <View>
            <Text>
              Größe in cm <Text>*</Text>
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="größe"
          />
          {errors.größe}
        </View>
        <Button title="weiter" onPress={() => handleSubmit(onSubmit)} />
      </ScrollView>
    </View>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  example: {
    marginVertical: 24,
  },
});
