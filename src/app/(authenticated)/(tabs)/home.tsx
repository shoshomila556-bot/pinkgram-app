import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import PhoneFrame from '../../../components/PhoneFrame';

const POSTS = [
  {
    id: '1',
    username: 'Mila',
    avatar: require('../../../../assets/images/user1.png'),
    image: require('../../../../assets/images/user1.png'),
    caption: 'Midnight black and neon pink aesthetic.',
    likes: '1,240 likes',
  },
  {
    id: '2',
    username: 'Janika',
    avatar: require('../../../../assets/images/user2.png'),
    image: require('../../../../assets/images/user2.png'),
    caption: 'Night ride stops and city lights.',
    likes: '918 likes',
  },
  {
    id: '3',
    username: 'Edoys',
    avatar: require('../../../../assets/images/user3.png'),
    image: require('../../../../assets/images/user3.png'),
    caption: 'Flash portrait mood.',
    likes: '2,045 likes',
  },
  {
    id: '4',
    username: 'Shosho',
    avatar: require('../../../../assets/images/user4.png'),
    image: require('../../../../assets/images/user4.png'),
    caption: 'Keeping the feed clean and bold.',
    likes: '764 likes',
  },
];

export default function HomeScreen() {
  return (
    <PhoneFrame>
      {/* Top Instagram-style Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>PINKGRAM</Text>
        <Text style={styles.headerTag}>FEED</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories Row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesRow}
        >
          {POSTS.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <View style={styles.storyRing}>
                <Image source={story.avatar} style={styles.storyImg} />
              </View>
              <Text style={styles.storyUser} numberOfLines={1}>
                {story.username}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Scrollable Posts */}
        {POSTS.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={post.avatar} style={styles.avatar} />
              <Text style={styles.username}>{post.username}</Text>
            </View>

            <Image source={post.image} style={styles.postImage} />

            {/* Plain Text Symbols Only - Zero Icon Libraries */}
            <View style={styles.actions}>
              <Text style={styles.symbol}>♥</Text>
              <Text style={styles.symbol}>💬</Text>
              <Text style={styles.symbol}>➤</Text>
            </View>

            <View style={styles.captionBox}>
              <Text style={styles.likes}>{post.likes}</Text>
              <Text style={styles.caption}>
                <Text style={styles.boldUser}>{post.username} </Text>
                {post.caption}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  brand: {
    color: '#FF2E93',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  headerTag: {
    color: '#0D0D0D',
    backgroundColor: '#FF85C0',
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  storiesRow: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 14,
    width: 64,
  },
  storyRing: {
    padding: 2,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#FF2E93',
    marginBottom: 4,
  },
  storyImg: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  storyUser: {
    color: '#DCDCDC',
    fontSize: 11,
  },
  postCard: {
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
    paddingBottom: 12,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: '#FF2E93',
    marginRight: 10,
  },
  username: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  postImage: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
    backgroundColor: '#171717',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 10,
    gap: 16,
  },
  symbol: {
    color: '#FF2E93',
    fontSize: 20,
    fontWeight: '700',
  },
  captionBox: {
    paddingHorizontal: 14,
    paddingTop: 6,
  },
  likes: {
    color: '#FF85C0',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 3,
  },
  caption: {
    color: '#E5E5E5',
    fontSize: 13,
  },
  boldUser: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});