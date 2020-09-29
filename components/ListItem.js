import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  const [isDone, setIsDone] = useState(false);
  const [counter, setCounter] = useState(1);

  const styleOfItemIsDone = isDone ? styles.strike : null;
  
  const decreaseCounter = () => {
    if(counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText, styleOfItemIsDone}  onPress={() => setIsDone(!isDone)}>{item.text}</Text>
        <View style={styles.count}>
          <Icon style={{padding: 5}} name="minus" size={20} color="blue" onPress={decreaseCounter}/>
          <Text>{counter}</Text>
          <Icon style={{padding: 5}} name="plus" size={20} color="blue" onPress={() => setCounter(counter + 1)}/>
        </View>
        <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem : {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
  },
  listItemText: {
    fontSize: 40,
  },
  strike: {
    textDecorationLine: 'line-through',
  },
  count: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ListItem;