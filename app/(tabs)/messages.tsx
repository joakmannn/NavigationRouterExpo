import { View, Text } from 'react-native'
import { makeStyles } from '@rneui/base'

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
  },
}))

export default function Messages() {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  )
} 