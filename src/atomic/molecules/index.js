import { Box, Image } from 'native-base';
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import slider from '../../img/slider.png';
import bike from '../../img/bike.png';

export function MainBanner() {
  return (
    <Box w='100%' h='300' mt='60px'>
      <ImageBackground
        source={slider}
        style={styles.container}
        resizeMode='contain'
      >
        <Image source={bike} alt='image of bike' />
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
