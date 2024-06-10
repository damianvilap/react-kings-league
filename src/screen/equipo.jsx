import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getPlayersByTeam } from '../services/kingsleagueapi';
import jugadorcard from '../components/jugadorcard';
import { useNavigation } from '@react-navigation/native';
