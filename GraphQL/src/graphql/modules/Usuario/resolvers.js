const db = require('../../../db');


function generatedId(lista){
  let newId;
  let lastId = lista[lista.length - 1]
  if(!lastId){
    newId = 0
  }else{
    newId = lastId.id;
  }

  return ++newId
}


module.exports = {

  Usuario: {
    perfil(usuario){
      return db.perfis.find(p => p.id === usuario.perfil_id);
    }
  },

  Query: {
    usuario(obj, {filter}){
      if(filter.id){
        return db.usuarios.find(db => db.id === filter.id);
      }else{
        return db.usuarios.find(db => db.email === filter.email);
      }
    },
    usuarios: () => db.usuarios,
  },

  Mutation: {
    criarUsuario(_, {data}){

      const { email } = data;

      const usuarioExistente = db.usuarios.some(user => user.email === email)

      if(usuarioExistente){
        throw new Error(`Usuário existente: ${data.email}`)
      }

      const novoUsuario = {
        ...data,
        id: generatedId(db.usuarios),
        perfil_id: 2
      }

      db.usuarios.push(novoUsuario)
      return novoUsuario
    },
    atualizarUsuario(_, {id, data}){
      const usuario = db.usuarios.find(u => u.id === id)
      const index = db.usuarios.findIndex(u => u.id === id)

      if(!usuario){
        throw new Error(`Usuário já existe`)
      }

      const novoUsuario = {
        ...usuario,
        ...data
      }

      db.usuarios.splice(index, 1, novoUsuario);
      return novoUsuario;
    },
    deletarUsuario(_, {filter: {id, email}}){
      return deletearUsuarioFiltro(id ? {id} : {email})
    }
  }
}


// Functions
function deletearUsuarioFiltro(filtro){

  const keys = Object.keys(filtro)[0];
  const values = Object.values(filtro)[0];

  const user = db.usuarios.find(u => u[keys] === values)
  if(!user){
    throw new Error("Usuário não encontrado")
  }
  db.usuarios = db.usuarios.filter(u => u[keys] !== values)
  return !!user
}