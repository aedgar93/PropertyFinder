'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Linking
  } from 'react-native';

export default class PropertyDetails extends Component<{}> {
    render() {
        const listing = this.props.listing
        console.log(listing)
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: listing.img_url }}
                    resizeMode="cover" />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.price}>{listing.price_formatted}</Text>
                    <Text>{listing.bedroom_number} Bed - {listing.bathroom_number} Bath</Text>
                    <Text>{listing.summary}</Text>
                    { listing.lister_name ?
                        <Text>For more information, contact {listing.lister_name} or visit <Text style={styles.link} onPress={ ()=>{ Linking.openURL(listing.lister_url)}}>{listing.lister_url}</Text></Text>
                        : null
                    }

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: '#656565'
    },
    container: {
        marginTop: 65,
        alignItems: 'center'
    },
    detailsContainer: {
        padding: 30
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    image: {
        width: "100%",
        height: 200
    },
    link: {
        color: '#48BBEC',
        textDecorationLine: "underline"
    }
});
