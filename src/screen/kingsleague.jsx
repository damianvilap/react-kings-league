import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getTeams } from '../services/kingsleagueapi';
import equipocard from '../components/equipocard';
import { useNavigation } from '@react-navigation/native';