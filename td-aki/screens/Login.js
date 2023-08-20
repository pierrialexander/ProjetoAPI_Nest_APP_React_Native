import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle'

export default function Login({navigation}) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    if (email && password) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Principal' }]
        });
    }
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Entre no Td Aki</Text>
      <Input 
        placeholder='E-mail' 
        keyboardType='email-address' 
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />
      <Input 
        placeholder='Sua Senha' 
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={value => setPassword(value)}
      />
      <Button 
        icon={
          <Icon 
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        onPress={() => entrar()}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: '#def',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
