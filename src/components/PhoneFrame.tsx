import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.desktopBg}>
      {/* Outer Titanium iPhone Chassis */}
      <View style={styles.iphoneBezel}>
        {/* Inner OLED Screen */}
        <View style={styles.screen}>
          {/* iOS Status Bar + Dynamic Island */}
          <View style={styles.statusBar}>
            <Text style={styles.timeText}>9:41</Text>

            {/* Dynamic Island Notch */}
            <View style={styles.dynamicIsland}>
              <View style={styles.cameraLens} />
            </View>

            {/* Signal, Wi-Fi & Battery (Pure CSS/Views, No External Icons) */}
            <View style={styles.statusIcons}>
              {/* Cellular Bars */}
              <View style={styles.signalGroup}>
                <View style={[styles.signalBar, { height: 4 }]} />
                <View style={[styles.signalBar, { height: 6 }]} />
                <View style={[styles.signalBar, { height: 8 }]} />
                <View style={[styles.signalBar, { height: 10 }]} />
              </View>

              {/* Wi-Fi Arc Symbol */}
              <Text style={styles.wifiSymbol}>Wi-Fi</Text>

              {/* Battery */}
              <View style={styles.batteryBody}>
                <View style={styles.batteryLevel} />
              </View>
            </View>
          </View>

          {/* Main App Content */}
          <View style={styles.appContent}>{children}</View>

          {/* Bottom iOS Home Indicator */}
          <View style={styles.homeIndicatorArea}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  desktopBg: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  iphoneBezel: {
    width: '100%',
    maxWidth: 400,
    flex: 1,
    maxHeight: 830,
    backgroundColor: '#1E1E22',
    borderRadius: 52,
    padding: 12,
    borderWidth: 2,
    borderColor: '#3A3A40',
  },
  screen: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    borderRadius: 42,
    overflow: 'hidden',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#0D0D0D',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    width: 45,
  },
  dynamicIsland: {
    width: 108,
    height: 28,
    backgroundColor: '#000000',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#1F1F1F',
  },
  cameraLens: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#182238',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1.5,
  },
  signalBar: {
    width: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  wifiSymbol: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  batteryBody: {
    width: 22,
    height: 11,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 1.5,
    justifyContent: 'center',
  },
  batteryLevel: {
    width: '80%',
    height: '100%',
    backgroundColor: '#FF2E93',
    borderRadius: 1.5,
  },
  appContent: {
    flex: 1,
  },
  homeIndicatorArea: {
    height: 20,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIndicator: {
    width: 130,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    opacity: 0.75,
  },
});