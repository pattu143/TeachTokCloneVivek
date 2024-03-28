import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ApiService} from '../api/Apiservice';
import Flashcard from '../components/Flashcard';
import MCQ from '../components/Multiplechoice';

const HomeScreen: React.FC = () => {
  const [followingContent, setFollowingContent] = useState<any[]>([]);
  const [forYouContent, setForYouContent] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const followingData = await ApiService.getFollowing();
      const forYouData = await ApiService.getForYou();
      setFollowingContent(followingData);
      setForYouContent(forYouData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Text>Following</Text>
      <FlatList
        data={followingContent}
        renderItem={({item}) => (
          <Flashcard
            userName={item.userName}
            userIcon={item.userIcon}
            contentDescription={item.contentDescription}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        // Implement infinite scroll here
      />
      <Text>For You</Text>
      <FlatList
        data={forYouContent}
        renderItem={({item}) => (
          <MCQ
            userName={item.userName}
            userIcon={item.userIcon}
            contentDescription={item.contentDescription}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        // Implement infinite scroll here
      />
    </View>
  );
};

export default HomeScreen;
