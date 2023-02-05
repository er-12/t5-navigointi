
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


function History({route}) {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <FlatList 
        data={data}
        inverted={true} //viimeisin laskutoimitus listan ylin
        contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
        ListFooterComponent={<Text style={styles.text}>History</Text>}
        renderItem={({item}) => 
          <Text>{item.n1 + item.math + item.n2 + item.equals + item.result}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    margin: 10
  },

}); 

export default History; 