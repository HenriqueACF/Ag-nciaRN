import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Login} from './src/screen/Login/Login'
import {Banco} from "./src/screen/Banco/Banco";
import {Registro} from './src/screen/Registro/Registro'
import {RegistroCompl} from './src/screen/Registro-Complementar/RegistroCompl'
import {CapturaDoc} from "./src/screen/CapturaDoc/CapturaDoc"
import {CapturaDocVerso} from './src/screen/CapturaVerso/CapturaDocVerso'
import {RegistroFinalizado} from './src/screen/RegistroFinalizado/RegistroFinalizado'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
          <Stack.Screen
              name="Banco"
              component={Banco}
              options={{
                  headerShown: false
              }}
          />
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="RegistroComplementar"
                component={RegistroCompl}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="CapturaDoc"
                component={CapturaDoc}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="CapturaVerso"
                component={CapturaDocVerso}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="RegistroFinalizado"
                component={RegistroFinalizado}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

