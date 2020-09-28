# filme
Projeto para criação de aplicativo mobil para treinamento web: Aplicações Web
Reactive Native - Aula do Curso Mobil

// Instalar o expo-cli (Executar somente uma vez na vida)
npm i -g expo-cli


//Executar os scrits abaixo uma vez por projeto
// Criar um projeto expo:
expo init filmes --template=blank

// Navigation do React Native (Rotas e Menus)
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer

// React Native Paper (Trabalhar com layout)
npm install react-native-paper

// Responsive Grid (Trabalhar com Grids)
npm install react-native-responsive-grid

//Verificar comandos que o terminal solicitar: tipo Atualizaçao de pacote: "yarn" ou instalar "npm install -g npm"

/** AULA 2**/
1 - Criar uma conta no site themoviedb.org
2 - Após criar a conta, gerem uma API_KEY no site, pelo caminho: Perfil -> Configurações -> API
3 - Preencher o cadastro do aplicativo
4 - Uri: http://localhost:19002
5 - Escolher a opçao "Development"

****************Instalar biblioteca axios*******************
npm i axios
via yarn:
"yarn add axios"
Biblioteca que faz requisições HTTP (existesm outras como o FAT)

*************************************************************
Usando hooks useEffect: quando a página abrir ele roda o que tive chamando 
 
useEffect(()=>{

    }, [])





