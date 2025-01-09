import { View, Text } from 'react-native'
import { Button, makeStyles } from '@rneui/base'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
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
    marginTop: 20,
  },
}))

export default function Profile() {
  const styles = useStyles()
  const { session } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.emailText}>{session?.user.email}</Text>
      <Button
        title="Sign Out"
        onPress={() => supabase.auth.signOut()}
        buttonStyle={styles.signOutButton}
      />
    </View>
  )
} 