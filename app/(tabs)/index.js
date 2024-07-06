
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {




  return (

    <LinearGradient
      // Button Linear Gradient
      colors={['#C8E6C9', 'white', "#C8E6C9"]}
      style={styles.parentContainer}>

      <ScrollView style={{ flex: 1, padding: 20}}>



        <View>
          <Text style={{ color: "green", fontWeight: "bold", fontSize: 18 }}>
            Institute of Food Science and Technology
          </Text>
        </View>

        <View style={{ backgroundColor: "green", padding: 20, borderRadius: 8, alignItems: "center", justifyContent: 'center', marginTop: 50 }}>
          <Text style={{ color: "#FFFF" }}>
            CONSUMER ACCEPTABILITY
            OF BAKERY PRODUCTS WITH KAONG SWEETENER

          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => router.navigate('/compute')} style={[styles.buttonContainer]}>

            <Text>
              Compute
            </Text>
          </TouchableOpacity>

        </View>

      <View style={{flex: 1, alignItems:"center", justifyContent:"center", marginTop: 20}}>

          <Text style={styles.text}>Kaong Sugar is an all-natural sweetener alternative.</Text>
          <Text style={styles.text}>It is highly nutritious and has a low glycemic index, making it ideal for diabetics and dieters.</Text>
          <Text style={styles.text}>It is made using the newly gathered sap that comes from the kaong plant, which grows along rivers and streams in Upland.</Text>

      </View>

    

      </ScrollView>
      <View style={{ backgroundColor: "green", padding: 10,alignItems: "center", justifyContent: 'center', marginTop: 50 }}>
        <Text style={{ color: "#FFFF" }}>
          BACHELOR OF FOOD SCIENCE AND TECHNOLOGY
        </Text>
      </View>
    </LinearGradient>
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
    backgroundColor: "white",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "green"
  },
  text:{

  }

});
