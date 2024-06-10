import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { KingsLeagueAPI } from '../KingsLeagueAPI';
import JugadorCard from '../components/JugadorCard';
import { useNavigation } from '@react-navigation/native';

const equipo = ({ route }) => {
    const { teamId } = route.params;
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const data = await KingsLeagueAPI.getPlayersByTeam(teamId);
                setPlayers(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, [teamId]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading players...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JugadorCard key={item.id} item={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    playerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    photo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    playerInfo: {
        flex: 1,
    },
    playerName: {
        fontSize: 18,
    },
    position: {
        color: '#888',
    },
    media: {
        backgroundColor: '#f0ad4e',
        padding: 5,
        borderRadius: 3,
    },
    mediaText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default equipo;