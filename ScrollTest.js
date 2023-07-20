import React, { useCallback, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import ReactMoE from "react-native-moengage";

const _data = [
    {
        id: 0,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 1,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 2,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 3,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 4,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 5,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 6,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 7,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 8,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 9,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 10,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 11,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 12,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 13,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 14,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 15,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 16,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 17,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 18,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 19,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 20,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 21,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 22,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 23,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 24,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 25,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 26,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 27,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 28,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 29,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 30,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 31,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 32,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 33,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 34,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 35,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 36,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 37,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 38,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 39,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 40,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 41,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 42,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 43,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 44,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 45,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 46,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 47,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 48,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 49,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 50,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
    {
        id: 51,
        title: "Dummy Text",
        onPress: (() => {
            ReactMoE.showInApp();
        })
    },
];

export const ScrollTest = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            ReactMoE.showInApp()
        }, 2000);
    }, []);

    return (
        <View style={{ backgroundColor: "white" }}>
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={_data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ backgroundColor: "#F5FCFF", margin: 16 }}
                        activeOpacity={0.5}
                        onPress={() => item.onPress()}
                    >
                        <View>
                            <Text style={styles.item}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        height: 88,
        margin: 16
    }
});

export default ScrollTest;
