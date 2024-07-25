import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginForm() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const [refresh, setRefresh] = useState(false);

  const validateFrom = () => {
    let err = {};
    if (!userName) err.userName = 'Name is required';
    if (!password || password.length < 6) err.password = 'Password is not valid';
    setErrors(err);

    return Object.keys(err).length === 0;
  }

  const handleSubmit = () => {
    if (validateFrom()) {
      alert(`Username: ${userName}, Password: ${password}`);
    }
  }

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Login Form</Text>
      <Text>Username</Text>
      <TextInput autoCapitalize='none' value={userName} onChangeText={setUserName} placeholder='Enter username' style={styles.input} />
      {errors.userName && <Text style={{ color: 'red' }}>{errors.userName}</Text>}
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder='Enter password' style={styles.input} secureTextEntry />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
      <Button title='Login' onPress={handleSubmit} />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 8,
    width: 280,
    marginBottom: 10,


  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    width: 300,

  }
})