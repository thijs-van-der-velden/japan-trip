import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Page } from './src/external/Page';
import {transform, motion } from 'framer-motion';
import { useMemo } from 'react';

import Day from './src/components/Day';
import defaultStyles from './src/default.css';

const requireAll = ( context ) => {
  const data = [];
  context.keys().map(key => {
    const day = context(key);
    day.dateString = key.match(/\.\/(.*).json/)[1];
    day.date = new Date(Date.parse(`${day.dateString}T09:00:00.000${day.timezone}`));
    data.push(day);
  })
  return data;
}

const data = requireAll(require.context("./data", false, /.json$/));

export default function App() {
  console.log(data);
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
    <View style={styles.container}>
      <Page style={{
        width: '100vw',
        height: '100vh'
      }}>
        {
         pages
        }
      </Page>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
