import axios from 'axios'

export default class DebutantesApi {
  async buscarTodasAsDebutantes() {
    let token1 = localStorage.getItem('token')
    if (token1) {
      const { data } = await axios.get('/api/produtos/por-categoria/2/', {
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
        this.buscarTodasAsDebutantes()
      }, 1000)
    }
  }
}
