
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const features = [
    { id: '1', title: 'Modern Design', uri: 'https://picsum.photos/200/300' },
    { id: '2', title: 'Easy Navigation', uri: 'https://picsum.photos/200/300' },
    { id: '3', title: 'Great Performance', uri: 'https://picsum.photos/200/300' },
  ];

  const renderFeature = ({ item }) => (
    <TouchableOpacity
      style={styles.featureCard}
      onPress={() => navigation.navigate('Details', { feature: item })}
    >
      <Image source={{ uri: item.uri }} style={styles.featureImage} />
      <Text style={styles.featureTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>

      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.featureList}
      />

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureList: {
    paddingBottom: 20,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  profileButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;