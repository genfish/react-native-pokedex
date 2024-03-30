import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {

    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Per veure aquesta pantalla has d'iniciar sessió</Text>
            <Button 
                title="Anar a l'Inici de sessió"
                onPress={() => navigation.navigate("Account")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
    }
});
