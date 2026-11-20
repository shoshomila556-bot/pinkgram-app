import { useRouter } from 'expo-router';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PhoneFrame from '../../../components/PhoneFrame';

const MY_PHOTOS = [
  require('../../../../assets/images/user1.png'),
  require('../../../../assets/images/user2.png'),
  require('../../../../assets/images/user3.png'),
  require('../../../../assets/images/user4.png'),
];

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.usernameHeader}>@mila.vibes</Text>
          <TouchableOpacity onPress={() => router.replace('/(unauthenticated)/login')}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar & Stats */}
        <View style={styles.profileRow}>
          <Image
            source={require('../../../../assets/images/user1.png')}
            style={styles.profilePic}
          />
          <View style={styles.statsGroup}>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>4</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>1,480</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNum}>312</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Personal Details */}
        <View style={styles.detailsBox}>
          <Text style={styles.displayName}>Mila</Text>
          <Text style={styles.bioText}>Digital Creator • Midnight Aesthetics</Text>
          <Text style={styles.bioText}>Cagayan de Oro, Philippines</Text>
          <Text style={styles.websiteText}>pinkgram.app/mila</Text>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* 4-Photo Grid */}
        <View style={styles.gridHeader}>
          <Text style={styles.gridTitle}>POSTS</Text>
        </View>

        <View style={styles.grid}>
          {MY_PHOTOS.map((photo, idx) => (
            <Image key={idx} source={photo} style={styles.gridImg} />
          ))}
        </View>
      </ScrollView>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  usernameHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  logoutText: {
    color: '#FF2E93',
    fontSize: 12,
    fontWeight: '700',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2.5,
    borderColor: '#FF2E93',
  },
  statsGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNum: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  statLabel: {
    color: '#999999',
    fontSize: 11,
    marginTop: 2,
  },
  detailsBox: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  displayName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },
  bioText: {
    color: '#CCCCCC',
    fontSize: 12.5,
    lineHeight: 18,
  },
  websiteText: {
    color: '#FF85C0',
    fontSize: 12.5,
    fontWeight: '600',
    marginTop: 3,
  },
  editBtn: {
    marginHorizontal: 18,
    marginTop: 14,
    backgroundColor: '#171717',
    borderWidth: 1.5,
    borderColor: '#FF2E93',
    borderRadius: 10,
    paddingVertical: 9,
    alignItems: 'center',
  },
  editBtnText: {
    color: '#FF2E93',
    fontWeight: '700',
    fontSize: 13,
  },
  gridHeader: {
    marginTop: 20,
    paddingVertical: 9,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#222222',
    alignItems: 'center',
  },
  gridTitle: {
    color: '#FF85C0',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImg: {
    width: '50%',
    height: 170,
    borderWidth: 1,
    borderColor: '#0D0D0D',
  },
});