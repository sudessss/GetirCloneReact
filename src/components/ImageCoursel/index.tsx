import React, { useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function ImageCarousel({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  });

  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width} 
        decelerationRate="fast"
        snapToAlignment="center"
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current} 
      />
      
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.dot, 
              { backgroundColor: activeIndex === index ? '#5D3EBD' : '#E2DFED' }
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: height * 0.28,
    paddingTop: 15,
    backgroundColor: "white",
  },
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.5, 
    height: height * 0.21, 
    resizeMode: "contain",
  },
  paginationContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10,
    gap: 6, 
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default ImageCarousel;