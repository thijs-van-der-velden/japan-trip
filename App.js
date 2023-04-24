import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Page } from './src/external/Page';
import {transform, motion } from 'framer-motion';
import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { DateTime } from 'luxon';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from './assets/rising-sun.svg';

import Day from './src/components/day';
import theme from './src/theme';

import { GlobalStyle } from './src/default-styles';

import fonts from './src/fonts.css';

const requireAll = ( context ) => {
  const data = [];
  context.keys().map(key => {
    const day = context(key);
    day.dateString = key.match(/\.\/(.*).json/)[1];
    day.date = DateTime.fromISO(`${day.dateString}T09:00:00.000`).setZone(day.timezone);
    data.push(day);
  })
  return data;
}

const data = requireAll(require.context("./data", false, /.json$/));

export default function App() {
  const [page, setPage] = useState(undefined);

  useEffect(() => {
    if (page !== undefined) {
      AsyncStorage.setItem('page', page);
    }
  }, [page]);

  useEffect(() => {
   AsyncStorage.getItem('page').then((value) => {
    setPage(parseInt(value))
   });
  }, []);

  const pages = useMemo(() => 
    data.map((day, i) => (
      <motion.div
        key={i}
        style={{
        width: '100vw',
        height: '100vh',
        padding: 18,

      }}>
        <Day {...day}/>
      </motion.div>
    ))
  , [data]);

  return (
    <ThemeProvider theme={theme}>
      <Background style={{
        position: 'absolute',
        height: '100vh',
        left: '50%',
        marginLeft: '-73.6667vh',
        fill: theme.palette.red
      }}
        />
      <GlobalStyle/>
      <View style={styles.container}>
        <Page style={{
          width: '100vw',
          height: '100vh'
        }}
          currentPage={page}
          onChangePage={(to) => setPage(to)}
        >
          {
          pages
          }
        </Page>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
