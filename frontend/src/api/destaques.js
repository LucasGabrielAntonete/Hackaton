import axios from 'axios'

export default class DestaquesApi {
  async buscarTodasOsDestaques() {
    let token1 = localStorage.getItem('token')
    if (token1) {
      const { data } = await axios.get('/api/produtos/por-categoria/7/', {
        headers: {
          Authorization: `Bearer ${token1}`,
          'Content-Type': 'multipart/form-data',
          accept: 'application/json'
        }
      })
      console.log(data)
      return data
    } else {
      console.log('Não tem token')
      setTimeout(() => {
        this.buscarTodasOsDestaques()
      }, 1000)
    }
  }
}
