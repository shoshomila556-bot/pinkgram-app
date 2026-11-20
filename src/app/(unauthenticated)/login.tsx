import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import PhoneFrame from '../../components/PhoneFrame';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoMark}>✦</Text>
        </View>
        <Text style={styles.title}>PINKGRAM</Text>
        <Text style={styles.subtitle}>Sign in to view your feed</Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#666666"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#666666"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(authenticated)/(tabs)/home')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <Link href="/(unauthenticated)/register" style={styles.link}>
            Register
          </Link>
        </View>
      </ScrollView>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 26,
  },
  logoBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1A1A1A',
    borderWidth: 2,
    borderColor: '#FF2E93',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 14,
  },
  logoMark: {
    color: '#FF2E93',
    fontSize: 28,
  },
  title: {
    color: '#FF2E93',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3,
  },
  subtitle: {
    color: '#A3A3A3',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 30,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#FF85C0',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#FF2E93',
    borderRadius: 12,
    padding: 13,
    color: '#FFFFFF',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FF2E93',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#0D0D0D',
    fontSize: 15,
    fontWeight: '800',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#999999',
    fontSize: 13,
  },
  link: {
    color: '#FF2E93',
    fontSize: 13,
    fontWeight: '700',
  },
});