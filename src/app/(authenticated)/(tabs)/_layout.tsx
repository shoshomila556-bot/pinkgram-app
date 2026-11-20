import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0D0D0D',
          borderTopColor: '#FF2E93',
          borderTopWidth: 1,
          height: 58,
          paddingBottom: 6,
        },
        tabBarActiveTintColor: '#FF2E93',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 18, fontWeight: '700' }}>⌂</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 18, fontWeight: '700' }}>◉</Text>
          ),
        }}
      />
    </Tabs>
  );
}
