export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Criar Banner para o cliente',
          labels: ['#FE7B00'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Criar Arte para a Empresa',
          labels: ['#FE7B00'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Estudar mais sobre React',
          labels: ['#FE7B00'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Colocar Tinta na impressora',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Mostrar o Programa pra galera',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Construindo o programa ainda ;-;',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Assistir a Segunda temporada de Breaking Bad',
          labels: ['#FE7B00'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Tentar dominar o Mundo com Tecnologia.',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Da uma olhada no Cordova',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Banner do Cliente',
          labels: [],
        },
        {
          id: 12,
          content: 'Artes para o site do cliente prontas.',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Lavar a Louça! kk',
          labels: ['#FE7B00'],
        }
      ]
    },
  ];
}