
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {




    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

            <View style={{ backgroundColor: "#131842", alignItems: "center", padding: 10, flexDirection: "row", justifyContent: "center", position: "relative" }}>

                <View style={{ marginLeft: 10, alignItems: "center" }}>
                    <Text adjustsFontSizeToFit={true} style={{ color: "#FFFF", fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
                        CONSUMER ACCEPTABILITY CALCULATOR
                    </Text>
                </View>
            </View>

            <LinearGradient
                // Button Linear Gradient
                colors={['#FBF6E2', '#FBF6E2', "#FBF6E2"]}
                style={styles.parentContainer}>

            <View style={{alignItems:"center", justifyContent:"center", padding: 25}}>
                <Text style={[styles.text, {fontWeight:"bold", fontSize: 20,}]}>About the author</Text>
                <Text style={[styles.text, {textAlign:"center"}]}>This application is authored by the <Text>Institute of Food Science and Technology (IFST)</Text>
                Faculty and BS Food Technology Students Class of 2024 from <Text>College of Agriculture, Food, Environment and Natural Resources (CAFENR), Cavite State University</Text>
                </Text>
            </View>

                <View style={{ alignItems: "center", justifyContent: "center", padding: 25 }}>
                    <Text style={[styles.text, { fontWeight: "bold", fontSize: 20, }]}>Authors:</Text>
                    <Text style={[styles.text, { textAlign: "center" }]}>
                        Dr. Eufemio G. Barcelon, Remilyn V. Concepcion
                        Heidi P. Paler, Marie Abigail I. Cortado
                        Jan Edrea D. Cortes, Dezzerie Gyle A. Hermoso
                        Aitee Janelle E. Reterta, Carl Jeffrey F. Crudo
                        Elioregine Monica A. Barbacena, Arnold T. Ecubin
                        Samantha Joy G. Gayol, Josephine Joy A. De Luna
                    </Text>
                </View>

                <View style={{  alignItems: "center", justifyContent: "center", padding: 25 }}>
                    <Text style={[styles.text, { fontWeight: "bold", fontSize: 20, }]}>Special Credits to: </Text>
                    <Text style={[styles.text, { textAlign: "center" }]}>
                        Franz Andrew Chan, Ciara Mae Costa, Marilou Longos,
                        Sofia Decena, John Mark Unday, Ma. Dharyll Udtujan,
                        Junel Menor, Romeo Gallardo, Rymm John Paul Montana,
                        Mart Ian Dale Gito, Mark Laodenio, John Philip Preglo,
                        Charles Barron Telmo, John Michael Dillo,
                        Jaycee Alaine Manalang, Ayessa Gayle Albaran,
                        Rhema Thel Bautista, Mathew Rye Ochea,
                        Jhoanna Mae Corpuz, Cindy Pontillas,
                        James Russel Sarvida, Maria Angelica Martinez,
                        April Jane Sabillo, Jayli Mae Alura, Jovert Notario
                        Rommel Carl Plando, Mark Gabriel Licup
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
        alignItems:"center",
        justifyContent:"center"

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
        backgroundColor: "#ef9c66",
        borderRadius: 100,

    },
    text: {
        textAlign: "left",
        fontSize: 16,
        color: "#131842"
    },
    textSize: [

    ]

});
