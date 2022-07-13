import { ScrollView, View } from 'react-native';
import MultipleChoice from 'react-native-multiple-choice-picker';
import { useForm, Controller } from 'react-hook-form';

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
  const onSubmit = (data) => console.log(data);
  return (
    <ScrollView>
      <View>
        <Text>Was trifft auf Dich zu?</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MultipleChoice
              direction={'column'}
              choices={[
                'Bei mir wurde bereits Lipödem diagnostiziert.',
                'Ich habe den verdacht, das ich Lipödem habe.',
                'Ich habe kein Lipödem.',
                'Keine der oben genannten Möglichkeiten',
              ]}
              chosenColor={'#D93F66'}
              chosenTextColor={'#0D1A26'}
              customIndex={0}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="problem"
        />
        {errors.problem}
      </View>

      <Button title="weiter" onPress={() => navigation.navigate('Welcome')} />
    </ScrollView>
  );
};

export default ProfileInfoLipoScreen;
