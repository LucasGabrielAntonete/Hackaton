import axios from 'axios'
const token = localStorage.getItem('token')
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
    accept: 'application/json'
  }
}

export default class CategoriaApi {
    async buscarTodasAsCategorias() {
      let token1 = localStorage.getItem('token')
      if (token1) {
        const { data } = await axios.get('/api/produtos/por-categoria/6/', {
          headers: {
            Authorization: `Bearer ${token1}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        return data
      } else {
        console.log('Não tem token')
        setTimeout(() => {
          this.buscarTodasAsCategorias()
        }, 1000)
      }
    }
}