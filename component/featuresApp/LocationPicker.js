import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import OutlineButton from "./OutlineButton";
import { Colors } from "../../constants/featureAppColors";

const LocationPicker = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitude: 12.8884739,
    longitude: 77.6533189,
    // latitude: 0,
    // longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const verifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission;

      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insufficient Permission.");
      return false;
    }
    return true;
  };

  const handleGetLocation = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log({ location });
    setSelectedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handlePickMap = () => {
    // Handle pick map logic
  };

  const onMapLayout = () => {
    setIsMapReady(true);
  };

  //   useEffect(() => {
  //     if (selectedLocation && isMapReady) {
  //       setMapRegion({
  //         ...mapRegion,
  //         latitude: selectedLocation.latitude,
  //         longitude: selectedLocation.longitude,
  //       });
  //     }
  //   }, [selectedLocation, isMapReady]);

  return (
    <View style={styles.container}>
      <View style={styles.mapPreview} onLayout={onMapLayout}>
        {/* <MapView
          initialRegion={{
              latitude: 12.8884739,
              longitude:  77.6533189,
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        {selectedLocation && isMapReady && (
          <MapView style={styles.map} initialRegion={mapRegion}>
            <Marker coordinate={selectedLocation} />
          </MapView>
        )}
      </View>
      <View style={styles.actions}>
        <OutlineButton icon={"location"} onPress={handleGetLocation}>
          Locate User
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={handlePickMap}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
