import { Slot } from 'expo-router'
import { AuthProvider } from '../contexts/AuthContext'
import { ThemeProvider } from '@rneui/themed'

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  )
}
