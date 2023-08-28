import axios from 'axios'

const token = localStorage.getItem('token')
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
    accept: 'application/json'
  }
}

export default class DamasApi {
  async buscarTodasAsDamas() {
    let token1 = localStorage.getItem('token')
    if (token1) {
      const { data } = await axios.get('/api/produtos/por-categoria/1/', {
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
        this.buscarTodasAsDamas()
      }, 1000)
    }
  }
}
