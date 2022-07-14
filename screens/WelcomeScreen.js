import { View, Button, Image, Text, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen bei</Text>
      <View>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.logoTextContainer}>
        <Image style={styles.logoText} source={require('../assets/images/logo_text.png')} />
      </View>

      <Button
        style={styles.btnFilled}
        title="Anmelden"
        onPress={() => navigation.navigate('Profile')}
        underlayColor="#123454"
        color={colors.white}
      />
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}> Noch kein Nutzerkonto?</Text>
        <Button
          style={styles.btnOutlined}
          title="Registrieren"
          color={colors.fontSecondary}
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '375px',
    height: '812px',
  },
  title: {
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '31.5px',
    color: colors.fontSecondary,
    paddingBottom: '19.18px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7px',
    gap: '10px',
    width: '127px',
    height: '127px',
  },
  logoTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2px',
    width: ' 221px',
    height: '63px',
    paddingBottom: '119.91px',
  },
  logoText: {
    marginTop: '27px',
    width: '201px',
    height: '43px',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    padding: '0px',
    marginTop: '30px',
  },
  btnFilled: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '10px',
    width: '250px',
    height: '40px',
    justifyContent: 'center',
    borderRadius: '8px',
    backgroundColor: '#123454',
  },
  btnText: {
    width: '250px',
    height: '28px',
    fontSize: '12px',
    lineHeight: '150%',
    color: colors.black,
    textAlign: 'center',
  },
  btnOutlined: {
    fontWeight: '700',
    mixBlendMode: 'normal',
    lineHeight: '150%',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    fontSize: '16px',
    border: '1px solid #123454',
    borderRadius: '8px',
    width: '250px',
    height: '40px',
  },
});
