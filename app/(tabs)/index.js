
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {




  return (

    <SafeAreaView style={{ flex: 1, backgroundColor:"white"}}>

      <View style={{ backgroundColor: "#131842", alignItems: "center", padding: 10, flexDirection: "row", justifyContent: "center", position: "relative" }}>
        
        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Text adjustsFontSizeToFit={true} style={{ color: "#FFFF", fontSize: 25,textAlign:"center" , fontWeight:"bold"}}>
            CONSUMER ACCEPTABILITY CALCULATOR
          </Text>
        </View>
      </View>

      <LinearGradient
        // Button Linear Gradient
        colors={['#FBF6E2', '#FBF6E2', "#FBF6E2"]}
        style={styles.parentContainer}>





         <View style={{flex: 1, alignItems:"center", }}>
            

            <View style={{ backgroundColor: "#ECCEAE", padding: 20, borderRadius: 8, alignItems: "center", justifyContent: 'center', marginTop: 50, width:"90%" }}>
            <Text style={{ color: "#131842", textAlign: "left" }}>
              This application is for the computation of the <Text style={{ fontWeight: "bold", color:"#131842"}}>Consumer Acceptability of Bakery Products made with Kaong sugar as Sweetener</Text>
              This can be used to compute for the mean scores and frequency and to generate a graph for the results. Consumer acceptability assesses the degree of liking of a product based on the overall sensory appeal. 
              </Text>

            </View>

            <View style={{ marginTop: 50, height: 70, width:"70%" }}>
              <TouchableOpacity onPress={() => router.navigate('/compute')} style={[styles.buttonContainer]}>

                <Text style={{color:"#FFFF", fontWeight:"bold"}}>
                  Compute
                </Text>
              </TouchableOpacity>

            </View>

          <View style={{ justifyContent: "center", width: "90%", marginLeft: "5%", overflow: "hidden", marginTop: 50 }}>
            
            <Text style={[styles.text, { fontWeight: "bold", color:"#ef9c66", fontSize: 20}]}>Did you know?</Text>

            <Text  style={[styles.text, {marginTop: 20}]}>Kaong Sugar is an all-natural sweetener alternative.</Text>
            <Text style={styles.text}>It is highly nutritious and has a low glycemic index, making it ideal for diabetics and dieters.</Text>
            <Text style={styles.text}>It is made using the newly gathered sap that comes from the kaong plant, which grows along rivers and streams in Upland Cavite.</Text>

          </View>
         </View>

     



        {/* </ScrollView> */}

        
        {/* <View style={{ backgroundColor: "#5e908e", padding: 10, alignItems: "center", justifyContent: 'center', marginTop: 50 }}>
          <Text style={{ color: "#FFFF", textAlign:"center" }}>
            BACHELOR OF SCIENCE IN FOOD AND TECHNOLOGY
          </Text>
          <Text style={{ color: "#FFFF" , textAlign:"center"}}>
            2023 - 2024
          </Text>
        </View> */}

        <View style={{ backgroundColor: "#131842", alignItems: "center", padding: 10, flexDirection: "row", justifyContent: "center", position: "relative" }}>
          <View style={{ alignSelf: "flex-start", position: "absolute", left: 20, top: 5 }}>
            {/* <Image
              resizeMode="contain"
              style={{ height: 50, width: 50 }}
              source={require('../../assets/images/csu-logo.png')} /> */}
          </View>

          <View style={{ marginLeft: 10, alignItems: "center" }}>
            <Text adjustsFontSizeToFit={true} style={{ color: "#FFFF", fontSize: 25 }}>
              Cavite State University
            </Text>
            <Text style={{ color: "#FFFF", marginTop: 10 }}>
              College of Agriculture, Food, Environment and Natural Resources
            </Text>
            <Text style={{ color: "#FFFF" }}>
              Institute of Food Science and Technology
            </Text>
          </View>
        </View>
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
  },
  parentContainer: {
    flexGrow: 1,
    
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
  buttonContainer:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 20, 
    backgroundColor: "#ef9c66",
    borderRadius: 100,
  
  },
  text:{
    textAlign:"left",
    fontSize: 16,
    color: "#131842"
  },
  textSize:[

  ]

});
