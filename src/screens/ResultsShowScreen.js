import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.bg}>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            />
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.additionalInformation}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
    },
    image: {
        height: 200,
        width: 300,
        margin: 10,
        borderRadius: 4,
    },
    additionalInformation: {
        color: "gray",
        marginLeft: 10,
        marginBottom: 20,
    }
});

export default ResultsShowScreen;
