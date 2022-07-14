import { StyleSheet } from 'react-native';
import colors from '../colors/colors';

const styles = StyleSheet.create({
  icon: {
    width: '39px',
    height: '34px',
    marginRight: '4.4px',
  },
  header: {
    alignSelf: 'center',
    width: '238px',
    height: '32px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '90%',
    color: colors.brandSecondary,
    marginTop: '43px',
    marginBottom: '29px',
  },
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    marginLeft: '20px',
    marginRight: '24px',
  },
  progress: {
    position: 'absolute',
    width: '331px',
    height: '5px',
    left: '20px',
    top: '132px',
  },
  card: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '30px',
    width: '331px',
    height: '479.38px',
  },
  label: {
    height: '24px',
    color: colors.fontPrimary,
  },
  required: {
    letterSpacing: '0.5px',
    color: '#B92C3C',
  },
  input: {
    padding: '0px 8px',
    gap: '10px',
    width: '331px',
    height: '41.88px',
    backgroundColor: colors.white,
    color: colors.fontPrimary,
    borderRadius: '8px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    gap: '10px',
    width: '250px',
    height: '40px',
    border: '1px solid #AEB3B7',
    borderRadius: '8px',
    backgroundColor: '#F3F5F7',
    fontWeight: '700',
  },
  question: {
    width: '335px',
    height: '27px',
    marginTop: '44px',
    marginBottom: '35px',
    fontSize: '18px',
    padding: '20px',
    fontWeight: '700',
    color: colors.fontPrimary,
    lineHeight: '150%',
  },
  inputChoice: {
    fontFamily: 'OpenSans',
    fontWeight: '400',
    color: colors.fontPrimary,
    lineHeight: '150%',
    fontSize: '16px',
    marginBottom: '151px',
  },
});

export default styles;
