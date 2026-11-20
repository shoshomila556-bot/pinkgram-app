import { Link, useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import PhoneFrame from '../../components/PhoneFrame';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>JOIN PINKGRAM</Text>
        <Text style={styles.subtitle}>Create your profile in seconds</Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            placeholderTextColor="#666666"
          />
        </View>

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
            placeholder="Create password"
            placeholderTextColor="#666666"
            secureTextEntry
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#666666"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(authenticated)/(tabs)/home')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Link href="/(unauthenticated)/login" style={styles.link}>
            Login
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
  title: {
    color: '#FF2E93',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#A3A3A3',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 13,
  },
  label: {
    color: '#FF85C0',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#FF2E93',
    borderRadius: 12,
    padding: 12,
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
    marginTop: 20,
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
