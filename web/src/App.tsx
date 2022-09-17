import './styles/main.css';
import { useState, useEffect } from 'react';
import logoImg from './assets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  //Tudo que for colocado aqui vai funcionar no momento em que for exibito em tela

  //Colocamos o Game[] para definir o tipo do objeto que será recebido
  const [games, setGames] = useState<Game[]>([]);

  //Hook de efeitos colaterais, ele somente vai executar o que estiver dentro dele
  useEffect(() => {
    fetch('http://localhost:7777/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, []);
  //Se eu não passar nenhuma váriavel no array, ele vai executar apenas uma vez na função.


  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="logo NLW eSports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui!
      </h1>

      { /*  Listagem dos Banners de jogos 
            Sempre que for passar uma lista de coisas colocar um key no elemento 
      */}
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads} />
          )
        })}
      </div>

      { /* Banner de publicação de anúncios */}
      <CreateAdBanner />
    </div>
  )
};


export default App
