import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='blue' />
      <Text style={styles.title}>Meu appzão!</Text>
      <Text style={styles.title}>Aperte na Abobrinha</Text>
      <Button title='Abobrinha'></Button>
      <Button title='Abobrinha'></Button>
      <Button title='Abobrinha'></Button>
    </View>
  );
}


function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.fontButton} >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18
  },
  fontButton: {
    color: '#ffffff',
    fontSize: 14,
    padding: 20
  }
});
