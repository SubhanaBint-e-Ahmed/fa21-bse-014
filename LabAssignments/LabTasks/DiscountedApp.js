import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DiscountedApp() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [saveHistory, setSaveHistory] = useState([]);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountedPrice = price - (price * discount) / 100;
      const newHistory = [...saveHistory, { originalPrice: price, discountPercentage: discount, finalPrice: discountedPrice }];
      setSaveHistory(newHistory);
    } else {
      alert('Please enter valid numbers for original price and discount percentage (0-100).');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />
      <Button title="Calculate Discount" onPress={calculateDiscount} />
      {saveHistory.map((item, index) => (
        <Text key={index} style={styles.historyItem}>
          Original Price - {item.discountPercentage}% = {item.finalPrice.toFixed(2)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});
