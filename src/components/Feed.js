import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Avatar from './Avatar';
import feedList from '../hardData/feedList';

const linkImage =
  'https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg';
const lingImageFeed =
  'https://cdn3.ivivu.com/2014/11/30-anh-phong-canh-vao-chung-ket-cuoc-thi-anh-Vnexpress-iVIVU.com-2.jpg';

const Feed = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={linkImage} />
            <View style={{paddingLeft: 10}}>
              <Text style={styles.user}>Linh Dan</Text>
              <View style={styles.row}>
                <Text style={styles.time}>9m</Text>
                <Entypo name="dot-single" size={12} color={'#747476'} />
                <Entypo name="globe" size={12} color={'#747476'} />
              </View>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color={'#222121'} />
        </View>
        <Text style={styles.post}>
          Hey, cutie. Just wanted to let you know that this story originally ran
          in our October issue, so if you like what you see, you should probably
          snag a hard copy ASAP. Bye!
        </Text>
        <Image
          source={{uri: lingImageFeed}}
          style={styles.photo}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: 11,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222121',
  },
  time: {
    fontSize: 9,
    color: '#747476',
  },
  post: {
    fontSize: 12,
    color: '#222121',
    lineHeight: 16,
    paddingHorizontal: 11,
  },
  photo: {
    marginTop: 9,
    width: '100%',
    height: 300,
  },
});
