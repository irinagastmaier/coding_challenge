//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// hooks
import { StyleSheet } from 'react-native';
//components
import ProfileInfoLipoScreen from './screens/ProfileInfoLipoScreen';
import ProfileInfoScreen from './screens/ProfileInfoScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileInfoScreen} />
        <Stack.Screen name="ProfileLipo" component={ProfileInfoLipoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    position: relative,
    width: '375px',
    height: '812px',
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
