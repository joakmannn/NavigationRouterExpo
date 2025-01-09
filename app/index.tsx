import { View, Text, StyleSheet } from 'react-native'
import { Button, makeStyles } from '@rneui/base'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { useEffect } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'react-native'

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
  welcomeText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  emailText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },
  signOutButton: {
    backgroundColor: '#FF3366',
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
  },
}))

export default function Home() {
  const styles = useStyles()
  const { session, loading } = useAuth()

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/sign-in')
    }
  }, [session, loading])

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcomeText}>Loading...</Text>
      </View>
    )
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
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={styles.emailText}>{session?.user.email}</Text>
      <Button
        title="Sign Out"
        onPress={() => supabase.auth.signOut()}
        buttonStyle={styles.signOutButton}
        loadingProps={{ color: '#FFFFFF' }}
      />
    </View>
  )
}
