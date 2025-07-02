import React, {useState} from 'react';

import {View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = 
  useState('');

const handleLogin = () => {
  if (true){
    navigation.navigate('HomeScreen'); 
  }else { 
    alert('Por favor, prencha todos os campos.');
  }
};

return (
  <View style={styles.container}>
  <TextInput
   style={styles.input}
    placeholder= "Email"
     value={email}
      onchangeText={setEmail}/>

  <TextInput 
  style={styles.input}
   placeholder= "Senha"
    secureTextEntr={true} value={password} onchangeText={setPassword}/>

  <Pressable style={styles.button}
   onPress={handleLogin}>
  <Text style={styles.buttonText}>Entrar</Text>
</Pressable>
 </View> 
 );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor:'#6A0C0B',
    flex: 1, 
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    color: 'white'
  },
input: {
  width: '100%',
  height: 40,
  borderColor: '#FBCA03',
  color: 'white',
  borderWidth: 1,
  paddingHorizontal: 10,
  marginBottom: 10,
},
button: {
  backgroundColor: '#AA0505',
  padding: 10,
  borderRadiuns: 0,
  borderColor:'#FBCA03',
},
buttonText: {
  color: 'white',
  textAlign: 'center',
},
});

export default LoginScreen;