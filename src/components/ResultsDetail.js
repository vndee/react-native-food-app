import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.resultDetail}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.addtionalInformation}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    imageStyle: {
        width: 250,
        height: 130,
        borderRadius: 4,
    },
    resultDetail: {
        marginLeft: 15,
    },
    nameStyle: {
        fontWeight: "bold",
        marginTop: 5,
    },
    addtionalInformation: {
        color: "gray",
    }
});

export default ResultsDetail;