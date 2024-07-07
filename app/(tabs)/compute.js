
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ComputeScreen() {
    const [arrOne, setArrOne] = useState([]);
    const [arrTwo, setArrTwo] = useState([]);
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [onePercentage, setOnePercentage] = useState(0)
    const [twoPercentage, setTwoPercentage] = useState(0)
    const [showModal, setShowModal] = useState(false);

    const [pieOne, setPieOne] = useState([{ value: 0 }])
    const [pieTwo, setPieTwo] = useState([{ value: 0 }])

    const [oneMean, setOneMean] = useState('')
    const [twoMean, setTwoMean] = useState('')

    const [sumCountControl, setSumCountControl] = useState(0)
    const [sumCountBest, setCountBest] = useState(0)


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


        let a = []
        let b = []

        // frequency / total number * hedonic rank per row
        // add all it for the score
        let HedonicMeanControl = []
        let sumOfCountH = 0

        

        Object.entries(getFrequency(arrOne).result).map(([key, value], index) => {

            // Key is the hedonic rank
           
            // HedonicMeanControl.push((parseFloat(key) / lenghtTotalControl) * (parseFloat(value.count)))
            HedonicMeanControl.push({k: value.id, count: parseFloat(value.count)})
            
            sumOfCountH += parseFloat(value.count)
            // For the pie
            a.push(value.item)
        })

        
        
        setSumCountControl(sumOfCountH)
        setPieOne(a)


        let HedonicMeanBestTreatment = []
        let sumOfCountB = 0
        Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => {
            
      
            // HedonicMeanBestTreatment.push((parseFloat(key) / arrTwo.length) * (parseFloat(value.item.value)))
            HedonicMeanBestTreatment.push({ k: value.id, count: parseFloat(value.count) })
            sumOfCountB += parseFloat(value.count)
            b.push(value.item)
        })
        setCountBest(sumOfCountB)
        setPieTwo(b)


        let meanO = 0

        HedonicMeanControl.map((i, k) => {
            meanO += (parseFloat(i.count) / sumOfCountH) * i.k

         
        })

        let meanT = 0

        HedonicMeanBestTreatment.map((i, k) => {
            meanT += (parseFloat(i.count) / sumOfCountB.length) * i.k
        })
        
        
        setOneMean(meanO.toFixed(2))
        setTwoMean(meanT.toFixed(2))

        setShowModal(true)

    }

    useEffect(() => {

    }, [])


    function getFrequency(arr) {
        // arr.sort((a, b) => a - b);
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
        let sumOfCount = 0
        for (let key in frequency) {
            if (frequency[key] !== 0) {
                let percentage = ((frequency[key] / totalCount) * 100).toFixed(2) + '%';
                result[key] = {
                    id: parseFloat(key),
                    count: frequency[key],
                    percentage: percentage,
                    item: {
                        value: ((frequency[key] / totalCount) * 100),
                        text: `${((frequency[key] / totalCount) * 100).toFixed(2) + '%'}`
                    }
                };
                sumOfCount += parseFloat(frequency[key])
                sumOfPercentages += parseFloat(percentage); // Add percentage to sumOfPercentages
            }
        }

        const dataArray = Object.values(result);
        dataArray.sort((a, b) => b.id - a.id);
        
        let final = {
            result: dataArray,
            sum: sumOfPercentages,
            total: sumOfCount
        }

        
        
        return final;
    }



    return (
        <SafeAreaView style={{flex: 1}}>

            <View style={{ backgroundColor: "#5e908e", alignItems: "center", padding: 10, flexDirection: "row", justifyContent: "center", position: "relative" }}>
                <View style={{ alignSelf: "flex-start", position: "absolute", left: 20, top: 5 }}>
                    <Image
                        resizeMode="contain"
                        style={{ height: 50, width: 50 }}
                        source={require('../../assets/images/csu-logo.png')} />
                </View>

                <View style={{ marginLeft: 10, alignItems: "center" }}>
                    <Text style={{ color: "#FFFF" }}>
                        Cavite State University
                    </Text>
                    <Text style={{ color: "#FFFF" }}>
                        College of Agriculture, Food,
                    </Text>
                    <Text style={{ color: "#FFFF" }}>
                        Environment and Natural Resources
                    </Text>
                </View>
            </View>

            <LinearGradient
                colors={['white', 'white', "white"]}
                style={styles.parentContainer}
            >
                <ScrollView>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {

                        }}>

                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

                            <View style={[styles.shadowContainer, { backgroundColor: "#ffff", flex: 1, maxHeight: "80%", width: "80%" }]}>

                                <View style={{ padding: 20 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Result</Text>
                                </View>
                                <ScrollView style={{ flex: 1 }}>
                                    <View style={{ padding: 20 }}>



                                        {/* Group 1 */}
                                        <Text style={[{ fontWeight: "bold", }, styles.text]}>Control</Text>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles.text}>Mean for this  is x̄: <Text style={{ fontWeight: "bold", fontSize: 20 }}>{oneMean}</Text></Text>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            <View style={styles.row}>
                                                <View style={styles.column}>
                                                    <View style={[styles.rowItem, {alignItems:'flex-start'}]}>
                                                        <Text style={styles.text}>Hedonic</Text>
                                                        <Text style={styles.text}>Rank</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                                                        <View style={[styles.rowItem, { alignItems: 'flex-start' }]} key={index}>
                                                            <Text style={styles.text}>{value.id}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={[styles.rowItem, { alignItems: 'flex-start' }]}>
                                                        <Text style={styles.text}>Total</Text>
                                                    </View>


                                                </View>

                                                <View style={styles.column}>
                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>Frequency</Text>
                                                        <Text style={styles.text}>Control</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                                                        <View style={styles.rowItem} key={index}>
                                                            <Text style={styles.text}>{value.count}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>{sumCountControl}</Text>
                                                    </View>

                                                </View>

                                                <View style={styles.column}>
                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>Percentage</Text>
                                                        <Text style={styles.text}>Control</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrOne).result).map(([key, value], index) => (
                                                        <View style={styles.rowItem} key={index}>
                                                            <Text style={styles.text}>{value.percentage}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>{onePercentage}</Text>
                                                    </View>
                                                </View>
                                            </View>


                                            {/* Pie grap group 1 */}
                                        <View style={{ alignItems:"center", justifyContent:"center", marginTop: 20}}>
                                                <PieChart
                                                    showText
                                                    textSize={10}
                                                    labelsPosition='mid'
                                                    showValuesAsLabels
                                                    data={pieOne}
                                                />
                                        </View>
                                            {/* Pie graph group 1 */}

                                            {/* Get Mean */}


                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 10 }}>

                                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                    {/* <View style={{ flexDirection: "row", borderBottomWidth: 1 }}>
                                                {arrOne.map((i, k) => (

                                                    <Text>
                                                        {k >= 1 ? " + " + i : i}
                                                    </Text>
                                                ))}
                                            </View>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text> {arrOne.length}</Text>
                                            </View> */}
                                                </View>


                                            </View>

                                            {/* Get Mean */}

                                        </View>
                                        {/* Group 1 */}


                                        {/* Group 2 */}
                                        <Text style={[{ fontWeight: "bold", marginTop: 20 }, styles.text]}>Best treatment</Text>

                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles.text}> Mean for this is x̄: <Text style={{ fontWeight: "bold", fontSize: 20 }}>{twoMean}</Text></Text>
                                        </View>
                                        <View scrollEnabled style={{ marginTop: 20, }}>
                                            <View style={styles.row}>
                                                <View style={styles.column}>
                                                    <View style={[styles.rowItem, { alignItems: 'flex-start' }]}>
                                                        <Text style={styles.text}>Hedonic</Text>
                                                        <Text style={styles.text}>Rank</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                                                        <View style={[styles.rowItem, { alignItems: 'flex-start' }]} key={index}>
                                                            <Text style={styles.text}>{value.id}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={[styles.rowItem, { alignItems: 'flex-start' }]}>
                                                        <Text style={styles.text}>Total</Text>
                                                    </View>

                                                </View>

                                                <View style={styles.column}>
                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>Frequency</Text>
                                                        <Text style={[{ fontSize: 10 }, styles.text]}>Best treatment</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                                                        <View style={styles.rowItem} key={index}>
                                                            <Text style={styles.text}>{value.count}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>{sumCountBest}</Text>
                                                    </View>



                                                </View>

                                                <View style={styles.column}>
                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>Percentage</Text>
                                                        <Text style={[{fontSize: 10}, styles.text]}>Best treatment</Text>
                                                    </View>
                                                    {Object.entries(getFrequency(arrTwo).result).map(([key, value], index) => (
                                                        <View style={styles.rowItem} key={index}>
                                                            <Text style={styles.text}>{value.percentage}</Text>
                                                        </View>
                                                    ))}

                                                    <View style={styles.rowItem}>
                                                        <Text style={styles.text}>{twoPercentage}</Text>
                                                    </View>


                                                </View>
                                            </View>

                                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                                            <PieChart
                                                showText
                                                textSize={10}
                                                labelsPosition='mid'
                                                showValuesAsLabels
                                                data={pieTwo}
                                            />
                                            </View>

                                            {/* Get Mean */}


                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 10 }}>

                                                {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ flexDirection: "row", borderBottomWidth: 1 }}>
                                                {arrTwo.map((i, k) => (

                                                    <Text>
                                                        {k >= 1 ? " + " + i : i}
                                                    </Text>
                                                ))}
                                            </View>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text> {arrTwo.length}</Text>
                                            </View>
                                        </View> */}


                                            </View>

                                            {/* Get Mean */}
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


                    <View style={{ backgroundColor: "#5e908e", padding: 20, borderRadius: 8, alignItems: "center", justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ color: "#FFFF", textAlign: "center" }}>
                            CONSUMER ACCEPTABILITY
                            OF BAKERY PRODUCTS WITH KAONG SUGAR

                        </Text>
                    </View>


                    <View style={styles.parentContainer}>
                        <View >
                            <Text>Please enter a number</Text>
                            <TextInput
                                value={inputOne}
                                placeholder='Control'
                                keyboardType='numeric'
                                onChangeText={(v) => setInputOne(v)}
                                style={styles.textInputContainer}
                            />
                            <View style={{ marginTop: 30 }}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={enterInput}>
                                    <Text>Enter</Text>
                                </TouchableOpacity>
                            </View>

                            {/* LIST */}
                            <View style={[styles.shadowContainer, { marginTop: 10, backgroundColor: "#5e908e", padding: 20, flexDirection: "row" }]}>
                                {arrOne.map((i, k) => (
                                    <Text style={{color:"white"}}>{k >= 1 ? "," + i : i}</Text>
                                ))}
                            </View>
                            {/* LIST */}
                        </View>


                        <View style={{ flex: 1, marginTop: 50 }}>
                            <Text>Please enter a number</Text>
                            <TextInput
                                placeholder='Best treatment'
                                value={inputTwo}
                                keyboardType='numeric'
                                onChangeText={(v) => setInputTwo(v)}
                                style={styles.textInputContainer}
                            />
                            <View style={{ marginTop: 30 }}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={enterInputTwo}>
                                    <Text>Enter</Text>
                                </TouchableOpacity>
                            </View>

                            {/* LIST */}
                            <View style={[styles.shadowContainer, { marginTop: 10, backgroundColor: "#5e908e", padding: 20, flexDirection: "row" }]}>
                                {arrTwo.map((i, k) => (
                                    <Text style={{color: "white"}}>{k >= 1 ? "," + i : i}</Text>
                                ))}
                            </View>
                            {/* LIST */}


                        </View>


                        {/* Compute button */}

                        <View style={{ marginTop: 20 }}>

                            <TouchableOpacity style={styles.buttonContainer} onPress={() => computeNow()}>
                                <Text>Compute now</Text>
                            </TouchableOpacity>



                            <View style={{ marginTop: 10 }}>
                                <Button type="clear" color={"error"} onPress={() => reset()}>
                                    <Text style={{ color: "red", fontSize: 15 }}>Reset</Text>
                                </Button>

                            </View>


                        </View>

                        {/* Compute button */}

                    </View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
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
        borderBottomColor: "#5e908e"
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
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#C8CFA0",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#5e908e"
    },
    text:{
        color: "#5E908E"
    }

});
