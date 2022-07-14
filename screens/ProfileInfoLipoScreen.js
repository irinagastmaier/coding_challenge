import { Text, Button, TouchableOpacity, View, Image } from 'react-native';
import MultipleChoice from 'react-native-multiple-choice-picker';
import { useForm, Controller } from 'react-hook-form';
//import { ProgressView } from '@react-native-community/progress-view';
import styles from '../assets/styles/styles';

const ProfileInfoLipoScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      problem: '',
    },
  });
  const onSubmit = (data) => {
    navigation.navigate('Welcome');
  };
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          {' '}
          <Image style={styles.icon} source={require('../assets/images/icon_back.png')} />
        </TouchableOpacity>

        <Text style={styles.header}>Profil vervollständigen</Text>
        <ProgressView
          progressTintColor={colors.brandSecondary}
          trackTintColor="#899AA9"
          progress={1}
          style={styles.progress}
        />
      </View>
      <View>
        <Text style={styles.question}>Was trifft auf Dich zu?</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultipleChoice
              style={styles.inputChoice}
              direction={'column'}
              choices={[
                'Bei mir wurde bereits Lipödem diagnostiziert.',
                'Ich habe den verdacht, das ich Lipödem habe.',
                'Ich habe kein Lipödem.',
                'Keine der oben genannten Möglichkeiten',
              ]}
              chosenColor={'#D93F66'}
              chosenTextColor={'#0D1A26'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="problem"
        />
        {errors.problem}
      </View>
      <Button
        style={styles.btn}
        color="#687E92"
        title="weiter"
        onPress={() => handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default ProfileInfoLipoScreen;
