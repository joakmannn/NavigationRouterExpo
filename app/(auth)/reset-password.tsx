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
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
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
  resetButton: {
    backgroundColor: '#FF3366',
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

export default function ResetPassword() {
  const styles = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleResetPassword() {
    if (!email) {
      alert('Please enter your email address')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'your-app-scheme://reset-password-update',
      })
      
      if (error) {
        if (error.message.includes('invalid')) {
          alert('Please check your email format')
        } else {
          alert(error.message)
        }
      } else {
        alert('Check your email for the password reset link!')
        router.replace('/sign-in')
      }
    } catch (err) {
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
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
      <Text style={styles.subtitle}>
        Enter your email address and we'll send you a link to reset your password
      </Text>
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
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        loading={loading}
        loadingProps={{ color: '#FFFFFF' }}
        buttonStyle={styles.resetButton}
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