
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal } from 'react-native';
import { Button } from '@rneui/themed';

export default function HomeScreen() {
  const [arrOne, setArrOne] = useState([]);
  const [arrTwo, setArrTwo] = useState([]);
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [onePercentage, setOnePercentage] = useState(0)
  const [twoPercentage, setTwoPercentage] = useState(0)
  const [showModal, setShowModal] = useState(false);

  let hahaa = 0

  const enterInput = () => {
    if (inputOne !== '') {
      const updatedArr = [...arrOne, inputOne];
      setArrOne(updatedArr);


      setOnePercentage(getFrequency(arrOne).sum + "%")
      setInputOne('');


    }
  };

  const reset = () => {
    setArrOne([])
    setArrTwo([])
    setOnePercentage(0)
    setTwoPercentage(0)
  }

  const enterInputTwo = () => {
    if (inputTwo !== '') {
      const updatedArr = [...arrTwo, inputTwo];
      setArrTwo(updatedArr);
      setInputTwo('');
      setTwoPercentage(getFrequency(arrTwo).sum + "%")
    }
  };

  const computeNow = () => {
    setShowModal(true)
  }

  useEffect(() => {

  }, [])


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

    // Calculate percentages and filter out keys with zero count
    let result = {};
    let sumOfPercentages = 0;
    for (let key in frequency) {
      if (frequency[key] !== 0) {
        let percentage = ((frequency[key] / totalCount) * 100).toFixed(2) + '%';
        result[key] = {
          count: frequency[key],
          percentage: percentage,
        };
        sumOfPercentages += parseFloat(percentage); // Add percentage to sumOfPercentages
      }
    }


    let final = {
      result: result,
      sum: sumOfPercentages
    }


    //  // Optional: Check the result in console

    // Optional: Check the result in console


    return final;
  }



  return (
    <ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {

        }}>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
            <View style={[styles.shadowContainer, { backgroundColor: "#ffff", flex: 1,maxHeight: "80%", width: "80%" }]}>

            <View style={{padding: 20}}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Result</Text>
            </View>
                <ScrollView style={{flex: 1}}>
              <View style={{ padding: 20 }}>
               


              {/* Group 1 */}
                <Text style={{ fontWeight: "bold", }}>Group 1</Text>
                <View  style={{ marginTop: 20}}>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Range</Text>
                      </View>
                      {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{key}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>Total</Text>
                      </View>


                    </View>

                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Frequency</Text>
                        <Text>Group 1</Text>
                      </View>
                      {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{value.count}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>{Object.entries(getFrequency(arrOne).result).length}</Text>
                      </View>

                    </View>

                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Percentage</Text>
                        <Text>Group 1</Text>
                      </View>
                      {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{value.percentage}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>{onePercentage}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* Group 1 */}

                
                {/* Group 2 */}
                <Text style={{ fontWeight: "bold", marginTop: 20}}>Group 2</Text>
                <View scrollEnabled style={{ marginTop: 20, }}>
                  <View style={styles.row}>
                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Range</Text>
                      </View>
                      {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{key}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>Total</Text>
                      </View>

                    </View>

                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Frequency</Text>
                        <Text>Group 2</Text>
                      </View>
                      {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{value.count}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>{Object.entries(getFrequency(arrTwo).result).length}</Text>
                      </View>



                    </View>

                    <View style={styles.column}>
                      <View style={styles.rowItem}>
                        <Text>Percentage</Text>
                        <Text>Group 2</Text>
                      </View>
                      {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                        <View style={styles.rowItem} key={index}>
                          <Text>{value.percentage}</Text>
                        </View>
                      ))}

                      <View style={styles.rowItem}>
                        <Text>{twoPercentage}</Text>
                      </View>


                    </View>
                  </View>
                </View>

                {/* Group 2 */}

               
              </View>
            </ScrollView>
            <View>
              <Button onPress={() => setShowModal(false)}>
                Close
              </Button>
            </View>
            </View>
         
        </View>
      </Modal>


      <View style={styles.parentContainer}>
        <View >
          <Text>Please enter a number</Text>
          <TextInput
            value={inputOne}
            placeholder='Group 1'
            keyboardType='numeric'
            onChangeText={(v) => setInputOne(v)}
            style={styles.textInputContainer}
          />
          <View style={{ marginTop: 30 }}>
            <Button onPress={enterInput}>
              Enter
            </Button>
          </View>

          {/* LIST */}
          <View style={[ styles.shadowContainer,{ marginTop: 10, backgroundColor:"#FFF8E1", padding: 20, flexDirection:"row"}]}>
                      {arrOne.map((i, k) => (
                        <Text style={{  }}>{k >= 1 ? "," + i  : i }</Text>
                      ))}
                  </View>
          {/* LIST */}
        </View>


        <View style={{ flex: 1, marginTop: 50 }}>
          <Text>Please enter a number</Text>
          <TextInput
            placeholder='Group 2'
            value={inputTwo}
            keyboardType='numeric'
            onChangeText={(v) => setInputTwo(v)}
            style={styles.textInputContainer}
          />
          <View style={{ marginTop: 30 }}>
            <Button onPress={enterInputTwo}>
              Enter
            </Button>
          </View>

          {/* LIST */}
          <View style={[styles.shadowContainer, { marginTop: 10, backgroundColor: "#FFF8E1", padding: 20, flexDirection: "row" }]}>
            {arrTwo.map((i, k) => (
              <Text style={{}}>{k >= 1 ? "," + i : i}</Text>
            ))}
          </View>
          {/* LIST */}
      

        </View>


        {/* Compute button */}

        <View style={{marginTop: 20}}>
          <Button onPress={() => setShowModal(true)}>
            Compute now
          </Button>

          <View style={{ marginTop: 10 }}>
            <Button type="clear" color={"error"} onPress={() => reset()}>
              <Text style={{color: "red", fontSize: 15}}>Reset</Text>
            </Button>

          </View>

          
        </View>
          
          {/* Compute button */}

      </View>
    </ScrollView>
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
  column: {
    width: "33.33%"
  },
  rowItem: {
    height: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  parentContainer: {
    flex: 1,
    padding: 20,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android to show the shadow
    borderRadius: 5
  },

});
