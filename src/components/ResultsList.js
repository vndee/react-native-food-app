import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 15,
    },
});

export default withNavigation(ResultsList);
