import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text style={{ marginLeft: 15, marginTop: 5 }}>
                We have found {results.length} result(s).
            </Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice("$")}
                />
                <ResultsList
                    title="Bit Pricer"
                    results={filterResultsByPrice("$$")}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice("$$$")}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
