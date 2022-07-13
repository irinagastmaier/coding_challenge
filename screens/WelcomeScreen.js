import { View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
        <Text>Willkommen bei</Text>
        <Image source={require('../assets/images/logo.png')} />
        <Image source={require('../assets/images/logo_text.png')} />
      <Button title="Anmelden" onPress={() => navigation.navigate('Profile')} />
      <Text> Noch kein Nutzerkonto?</Text>
      <Button title="Registrieren" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default WelcomeScreen;
