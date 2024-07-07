
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

   <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor: "#5e908e", alignItems: "center", padding: 10, flexDirection: "row", justifyContent:"center", position:"relative" }}>
        <View style={{ alignSelf: "flex-start", position:"absolute", left: 20, top:5 }}>
          <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={require('../../assets/images/csu-logo.png')} />
        </View>

        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Text adjustsFontSizeToFit={true} style={{ color: "#FFFF" }}>
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
        // Button Linear Gradient
        colors={['white', 'white', "white"]}
        style={styles.parentContainer}>


        <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
          <Text style={{ color: "#5e908e", fontWeight: "bold", fontSize: 30, textAlign:"center"}}>
            Institute of Food Science and Technology
          </Text>
        </View>

        {/* <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "blue", }}> */}



         <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
            

            <View style={{ backgroundColor: "#5e908e", padding: 20, borderRadius: 8, alignItems: "center", justifyContent: 'center', marginTop: 50 }}>
              <Text style={{ color: "#FFFF", textAlign: "center" }}>
                CONSUMER ACCEPTABILITY
                OF BAKERY PRODUCTS WITH KAONG SUGAR

              </Text>
            </View>

            <View style={{ marginTop: 20, height: 70, width:"70%" }}>
              <TouchableOpacity onPress={() => router.navigate('/compute')} style={[styles.buttonContainer]}>

                <Text>
                  Compute
                </Text>
              </TouchableOpacity>

            </View>
         </View>

     



        {/* </ScrollView> */}

             <View style={{ justifyContent: "center",  width: "90%", marginLeft:"5%", overflow:"hidden" }}>

            <Text style={styles.text}>Kaong Sugar is an all-natural sweetener alternative.</Text>
            <Text style={styles.text}>It is highly nutritious and has a low glycemic index, making it ideal for diabetics and dieters.</Text>
            <Text style={styles.text}>It is made using the newly gathered sap that comes from the kaong plant, which grows along rivers and streams in Upland Cavite.</Text>

          </View>
        <View style={{ backgroundColor: "#5e908e", padding: 10, alignItems: "center", justifyContent: 'center', marginTop: 50 }}>
          <Text style={{ color: "#FFFF", textAlign:"center" }}>
            BACHELOR OF SCIENCE IN FOOD AND TECHNOLOGY
          </Text>
          <Text style={{ color: "#FFFF" , textAlign:"center"}}>
            2023 - 2024
          </Text>
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
    backgroundColor: "#C8CFA0",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#5e908e"
  },
  text:{
    textAlign:"left",
    fontSize: 12
  },
  textSize:[

  ]

});
