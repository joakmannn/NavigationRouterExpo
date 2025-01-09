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
    backgroundColor: '#1E1E1E', // Dark grey background
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
  signUpButton: {
    backgroundColor: '#FF3366', // Sexy red
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF3366',
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
  },
  backButtonTitle: {
    color: '#FF3366',
  },
}))

export default function SignUp() {
  const styles = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp() {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'your-app-scheme://sign-in',
        data: {
          email: email,
        }
      }
    })
    setLoading(false)

    if (error) {
      alert(error.message)
    } else if (data?.user?.identities?.length === 0) {
      alert('This email is already registered. Please sign in instead.')
      router.replace('/sign-in')
    } else {
      alert('Please check your email for the confirmation link!')
      router.replace('/sign-in')
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
      <Button
        title="Create Account"
        onPress={handleSignUp}
        loading={loading}
        loadingProps={{ color: '#FFFFFF' }}
        buttonStyle={styles.signUpButton}
      />
      <Button
        title="Back to Sign In"
        onPress={() => router.back()}
        type="outline"
        buttonStyle={styles.backButton}
        titleStyle={styles.backButtonTitle}
      />
    </View>
  )
} 