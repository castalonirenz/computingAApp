
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function HomeScreen() {
  const [arrOne, setArrOne] = useState([]);
  const [arrTwo, setArrTwo] = useState([]);
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const enterInput = () => {
    if (inputOne !== '') {
      const updatedArr = [...arrOne, inputOne];
      setArrOne(updatedArr);
      setInputOne('');


    }
  };

  const enterInputTwo = () => {
    if (inputTwo !== '') {
      const updatedArr = [...arrTwo, inputTwo];
      setArrTwo(updatedArr);
      setInputTwo('');
    }
  };

  // function getFrequency(arr) {
  //   arr.sort((a, b) => a - b);
  //   let frequency = {};
  //   arr.forEach((value) => {
  //     frequency[value] = (frequency[value] || 0) + 1;
  //   });

  //   let minKey = arr[0];
  //   let maxKey = arr[arr.length - 1];

  //   for (let i = minKey; i <= maxKey; i++) {
  //     if (frequency[i] === undefined) {
  //       frequency[i] = 0;
  //     }
  //   }
  //   console.log(frequency, "--> check")
  //   return frequency;
  // }

  function getFrequency(arr) {
    arr.sort((a, b) => a - b);
    let frequency = {};
    let totalCount = arr.length;

    arr.forEach((value) => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    let minKey = arr[0];
    let maxKey = arr[arr.length - 1];

    for (let i = minKey; i <= maxKey; i++) {
      if (frequency[i] === undefined) {
        frequency[i] = 0;
      }
    }

    // Calculate percentages
    for (let key in frequency) {
      frequency[key] = {
        count: frequency[key],
        percentage: ((frequency[key] / totalCount) * 100).toFixed(2) + '%'
      };
    }

    console.log(frequency); // Optional: Check the result in console
    return frequency;
  }


  return (
    <View style={styles.parentContainer}>
      <View>
        <Text>Please enter a number</Text>
        <TextInput
          value={inputOne}
          keyboardType='numeric'
          onChangeText={(v) => setInputOne(v)}
          style={styles.textInputContainer}
        />
        <Button onPress={enterInput} style={{ marginTop: 20 }}>
          Enter
        </Button>

        <ScrollView scrollEnabled style={{ marginTop: 20, flexGrow: 1, minHeight: 300, maxHeight: 300}}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.rowItem}>
                <Text>Range</Text>
              </View>
              {Object.entries(getFrequency(arrOne)).map(([key, value], index) => (
                <View style={styles.rowItem} key={index}>
                  <Text>{key}</Text>
                </View>
              ))}

            </View>

            <View style={styles.column}>
              <View style={styles.rowItem}>
                <Text>Frequency</Text>
                <Text>Group 1</Text>
              </View>
              {Object.entries(getFrequency(arrOne)).map(([key, value], index) => (
                <View style={styles.rowItem} key={index}>
                  <Text>{value.count}</Text>
                </View>
              ))}

            </View>

            <View style={styles.column}>
              <View style={styles.rowItem}>
                <Text>Percentage</Text>
                <Text>Group 1</Text>
              </View>
              {Object.entries(getFrequency(arrOne)).map(([key, value], index) => (
                <View style={styles.rowItem} key={index}>
                  <Text>{value.percentage}</Text>
                </View>
              ))}

            </View>
          </View>
        </ScrollView>

      </View>

    
      <View>
        <Text>Please enter a number</Text>
        <TextInput
          value={inputTwo}
          keyboardType='numeric'
          onChangeText={(v) => setInputTwo(v)}
          style={styles.textInputContainer}
        />
        <Button onPress={enterInputTwo} style={{ marginTop: 20 }}>
          Enter
        </Button>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "white"
  },
  row: {
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 10,
    width: "100%"
  },
  column: {},
  rowItem: {
    height: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  parentContainer: {
    // flex: 1,
    // padding: 20,
  },
});
