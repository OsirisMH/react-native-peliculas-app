import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Movie} from '../interfaces/movieInterface';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

interface DetailScreenNavigationProp extends StackNavigationProp<RootStackParams, 'DetailScreen'> {}

export const MoviePoster = ({ movie, width = 250 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.7}
      style={{
        aspectRatio: 2 / 3,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 9,
  },
});
