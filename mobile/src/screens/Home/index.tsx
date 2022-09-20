import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export function Home() {
  //Use state criado para pegarmos o estado dos objetos recebidos no endpoint
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  //Função criada para fazer a passagem dos dados para a roda definida com seu parametros
  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl});
  }

  //Endpoint de entrada dos games
  useEffect(() => {
    fetch('http://192.168.0.113:7777/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que desejar jogar...'
      />
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item}
          onPress={() => handleOpenGame(item)}
           />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />



    </SafeAreaView>
    </Background>
  );
}