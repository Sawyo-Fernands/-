import { Text, View } from 'react-native'
import { styles } from './styles'
import { useMemo } from 'react'

export function BalanceItem(data){

    const labelName = useMemo(()=>{
        if(data.data.tag == 'saldo'){
            return {
                label:'Saldo Atual',
                color:"#3b3dbf"
            }
        } else  if(data.data.tag == 'receita'){
            return {
                label:'Entradas de Hoje',
                color:"#00b94a"
            }
        } else  {
            return {
                label:'Saidas de Hoje',
                color:"#ef463a"
            }
        }
    },[data])
    return(
        <View style={{
            ...styles.container,
            backgroundColor:labelName.color
        }}>
            <Text style={styles.textValores}> {labelName.label} </Text>
            <Text style={styles.balance}> 
            R$ {data.data.saldo} </Text>
        </View>
    )
}