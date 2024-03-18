import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckPermissions = ({ navigation }) => {
    const [isPermissionShown, setIsPermissionShown] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('permissionShown').then(value => {
            if (!value) {
                setIsPermissionShown(true);
            }
        });
    }, []);

    const handlePermissionGranted = () => {
        AsyncStorage.setItem('permissionShown', 'true').then(() => {
            navigation.navigate('HomeScreen');
        });
    };

    const askForPermission = (permission) => {
        request(permission).then((result) => {
            console.log(result);
            // Check if permission is granted
            if (result === 'granted') {
                handlePermissionGranted();
            }
        });
    };

    if (!isPermissionShown) {
        return null; // Do not render the permission screen if it has already been shown
    }

    return (
        <View style={styles.maincontainer}>
            <Text>Allow all the Permissions</Text>
            <TouchableOpacity style={styles.container} onPress={() => {
                const permission = Platform.select({
                    ios: PERMISSIONS.IOS.CAMERA,
                    android: PERMISSIONS.ANDROID.CAMERA
                });
                askForPermission(permission);
            }}>
                <Text style={styles.txt}>Allow Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => {
                const permission = Platform.select({
                    ios: PERMISSIONS.IOS.CONTACTS,
                    android: PERMISSIONS.ANDROID.CONTACTS
                });
                askForPermission(permission);
            }}>
                <Text style={styles.txt}>Allow Contacts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container} onPress={() => {
                const permission = Platform.select({
                    ios: PERMISSIONS.IOS.MICROPHONE,
                    android: PERMISSIONS.ANDROID.MICROPHONE
                });
                askForPermission(permission);
            }}>
                <Text style={styles.txt}>Allow Microphone</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CheckPermissions;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    maincontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 10
    },
    txt: {
        fontWeight: 'bold'
    }
});
