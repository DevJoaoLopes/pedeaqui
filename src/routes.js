
import Login from "./pages/Login.jsx"
import Cadastrar_se from "./pages/Cadastrar_se.jsx"
import Opcao from "./pages/Aplicacao/Opcao.jsx"
import Cardapio from "./pages/Aplicacao/Cardapio.jsx"
import Estabelecimentos from "./pages/Aplicacao/Estabelecimentos.jsx"
import IdentificarMesa from "./pages/Aplicacao/IdentificarMesa"
import DetalheItemCardapio from "./pages/Aplicacao/DetalheItemCardapio.jsx"

var routes = [
  {
    path: "/",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/",
    navigation: false,
    header: false
  },
  {
    path: "login",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/",
    navigation: false,
    header: false
  },
  {
    path: "cadastrarse",
    name: "Cadastrar-se",
    icon: "",
    component: Cadastrar_se,
    layout: "/",
    navigation: false,
    header: false
  },
  {
    path: "/opcao",
    name: "Escolha o que deseja fazer",
    icon: "",
    component: Opcao,
    layout: "/pedeaqui",
    navigation: false,
    header: false
  },
  {
    path: "/estabelecimentos",
    name: "Escolha o restaurante para exibir o cardápio",
    icon: "",
    component: Estabelecimentos,
    layout: "/pedeaqui",
    navigation: true,
    header: true
  },
  {
    path: "/cardapio/:restaurante",
    name: "Exibir o cardápio do restaurante escolhido",
    icon: "",
    component: Cardapio,
    layout: "/pedeaqui",
    navigation: true,
    header: true
  },
  {
    path: "/identificarmesa",
    name: "Identificar mesa que usuário irá se conectar",
    icon: "",
    component: IdentificarMesa,
    layout: "/pedeaqui",
    navigation: false,
    header: true
  },
  {
    path: "/itemcardapio/:id",
    name: "Detalhe do item do cardápio selecionado",
    icon: "",
    component: DetalheItemCardapio,
    layout: "/pedeaqui",
    navigation: true,
    header: true
  },
]

export default routes
