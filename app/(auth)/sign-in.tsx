import { useState } from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'
import { Button, Input, makeStyles } from '@rneui/base'
import { supabase } from '../../lib/supabase'
import { router } from 'expo-router'

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  trademark: {
    fontSize: 16,
    color: '#FF3366',
    position: 'absolute',
    top: 0,
    right: -25,
  },
  input: {
    color: '#FFFFFF',
    inputStyle: {
      color: '#FFFFFF',
    },
    containerStyle: {
      marginBottom: 15,
    },
    inputContainerStyle: {
      borderColor: '#333333',
      borderBottomWidth: 2,
    },
    placeholderTextColor: '#666666',
  },
  signInButton: {
    backgroundColor: '#FF3366',
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF3366',
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
  },
  createButtonTitle: {
    color: '#FF3366',
  },
  forgotPassword: {
    color: '#666666',
    textAlign: 'right',
    marginBottom: 20,
    marginTop: -10,
  },
}))

export default function SignIn() {
  const styles = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      router.replace('/')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.title}>Kitty</Text>
          <Text style={styles.trademark}>TM</Text>
        </View>
      </View>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        {...styles.input}
        leftIcon={{
          type: 'material',
          name: 'email',
          color: '#333333',
        }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        {...styles.input}
        leftIcon={{
          type: 'material',
          name: 'lock',
          color: '#333333',
        }}
      />
      <Text 
        style={styles.forgotPassword}
        onPress={() => router.push('/reset-password')}
      >
        Mot de passe oublié ?
      </Text>
      <Button
        title="Sign In"
        onPress={handleSignIn}
        loading={loading}
        loadingProps={{ color: '#FFFFFF' }}
        buttonStyle={styles.signInButton}
      />
      <Button
        title="Create Account"
        onPress={() => router.push('/sign-up')}
        type="outline"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
      />
    </View>
  )
} 