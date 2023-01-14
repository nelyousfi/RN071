import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontVariant: 'lining-nums',
          transform: 'translateY(-20px) rotate(20deg)',
          // transform: [
          //   {
          //     translateY: -20,
          //   },
          // ],
        }}>
        Hello Morocco - 100
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2,
        }}>
        {Array.from({length: 100}).map((_, i) => (
          <View
            key={`key_${i}`}
            style={{
              height: 10,
              aspectRatio: '1',
              backgroundColor: i % 2 === 0 ? 'coral' : 'crimson',
            }}
          />
        ))}
      </View>
      <Image
        source={require('./images/image.png')}
        resizeMode={'cover'}
        style={{
          height: 100,
          width: 200,
          objectFit: 'contain',
        }}
      />
      <View
        pointerEvents={'box-only'}
        onTouchStart={() => {
          console.log('parent');
        }}
        style={{
          backgroundColor: 'darkorange',
          padding: 20,
          borderRadius: 20,
        }}>
        <View
          onTouchStart={() => {
            console.log('parent');
          }}
          style={{
            backgroundColor: 'darkviolet',
            height: 100,
            width: 100,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
