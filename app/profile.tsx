import { View, Text } from 'react-native'
import { makeStyles, Button } from '@rneui/base'
import { supabase } from '../lib/supabase'

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
  signOutButton: {
    backgroundColor: '#FF3366',
    borderRadius: 25,
    height: 50,
    marginTop: 20,
  },
}))

export default function Profile() {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button
        title="Sign Out"
        onPress={() => supabase.auth.signOut()}
        buttonStyle={styles.signOutButton}
      />
    </View>
  )
} 