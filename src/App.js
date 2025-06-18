import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Loud',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'G3X',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Furia',
      cor: '#141414'
    },
    {
      id: uuidv4(),
      nome: 'W7M',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
       nome: 'SportBoys',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Marines',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Los Grandes',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[3].nome
    },
    {
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Lucas Andrade',
      cargo: 'Content Creator',
      imagem: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Marina Costa',
      cargo: 'Pro Player',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Felipe Duarte',
      cargo: 'Social Media Manager',
      imagem: '	https://randomuser.me/api/portraits/men/65.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Aline Martins',
      cargo: 'Video Editor',
      imagem: 'https://randomuser.me/api/portraits/women/68.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
