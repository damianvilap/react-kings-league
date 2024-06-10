import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { KingsLeagueAPI } from '../KingsLeagueAPI';
import EquipoCard from '../components/equipocard';
import { useNavigation } from '@react-navigation/native';

const kingsleague = ({ navigation }) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await KingsLeagueAPI.getTeams();
                setTeams(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading teams...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.teamItem} onPress={() => navigation.navigate('Players', { teamId: item.id, teamName: item.nombre })}>
                        <EquipoCard key={item.id} item={item} />
                    </TouchableOpacity>
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
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    teamName: {
        fontSize: 18,
    },
});

export default kingsleague;