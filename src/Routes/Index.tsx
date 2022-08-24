import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '../screen/Login/Login'
import {Banco} from '../screen/Banco/Banco'
import {Registro} from '../screen/Registro/Registro'
import {RegistroCompl} from '../screen/Registro-Complementar/RegistroCompl'
import {CapturaDoc} from '../screen/CapturaDoc/CapturaDoc'
import {CapturaDocVerso} from '../screen/CapturaVerso/CapturaDocVerso'
import {RegistroFinalizado} from '../screen/RegistroFinalizado/RegistroFinalizado'
import {TipoPagamento} from '../screen/Pagamento/TipoPagamento'
import {PagamentoQrCode} from '../screen/Pagamento/QrCode/PagamentoQrCode'
import {PagamentoBoleto} from '../screen/Pagamento/Boleto/PagamentoBoleto'
import {PagamentoCodigo} from '../screen/Pagamento/Codigo/PagamentoCodigo'
import {Pix} from '../screen/Pix/Pix'
import {TransChave} from '../screen/Pix/Enviar/Chave/TransChave'
import {TransQrcode} from '../screen/Pix/Enviar/QrCode/TransQrcode'
import {TransPix} from '../screen/Pix/Enviar/Transferir/TransPix'
import {CobrarPix} from '../screen/Pix/Receber/Cobrar/CobrarPix'
import {DepositarPix} from '../screen/Pix/Receber/Depositar/DepositarPix'
import {Receber} from '../screen/Receber/Receber'
import {TipoTransferencia} from '../screen/Transferir/TipoTransferencia'
import {Perfil} from '../screen/Perfil/Perfil'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
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

            <Stack.Screen
                name="TipoPagamento"
                component={TipoPagamento}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PagamentoQrCode"
                component={PagamentoQrCode}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PagamentoBoleto"
                component={PagamentoBoleto}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PagamentoCodigo"
                component={PagamentoCodigo}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Pix"
                component={Pix}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TransChave"
                component={TransChave}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TransQrcode"
                component={TransQrcode}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TransPix"
                component={TransPix}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="CobrarPix"
                component={CobrarPix}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="DepositarPix"
                component={DepositarPix}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Receber"
                component={Receber}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TipoTransferencia"
                component={TipoTransferencia}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
