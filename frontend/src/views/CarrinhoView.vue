<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      ItensCarrinho: [],
      total: 0
    }
  },
  mounted() {
    this.buscarCarrinho()
  },
  methods: {
    async buscarCarrinho() {
      const token = localStorage.getItem('token')
      try {
        const resposta = await axios.get(`api/get_cart/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        this.ItensCarrinho = resposta.data
        this.total = this.ItensCarrinho.reduce((total, item) => total + item.preco, 0)
        console.log('Produto', this.produto)
      } catch (error) {
        console.error('Erro buscando ao buscar o produto.', error)
      }
    },
    async removeFromCart(produtoId) {
      const token = localStorage.getItem('token')
      const decodedToken = jwtDecode(token)
      const usuarioId = decodedToken.user_id
      try {
        const response = await axios.post(
          '/api/remove_from_cart/',
          {
            produto_id: produtoId,
            usuario_id: usuarioId
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
              accept: 'application/json'
            }
          }
        )
        console.log(response.data.message)
        this.buscarCarrinho()
      } catch (error) {
        console.error('Erro ao remover do carrinho:', error)
      }
    }
  }
}
</script>
<template>
  <h1 class="carrinhoh1">Carrinho</h1>
  <div v-for="item in ItensCarrinho" :key="item.id" class="carrinho">
    <hr />
    <div class="produto">
      <img :src="item.capa" alt="" />
      <div class="info">
        <h1 class="nome">{{ item.nome }}</h1>
        <h2 class="preco">R${{ item.preco.toFixed(2).replace('.', ',') }}</h2>
        <h2 class="status">Em estoque</h2>
        <h2 class="desc">{{ item.descricao }}</h2>
        <div>
          <input type="date" v-model="dataInicio" /> - <input type="date" v-model="dataFinal" />
        </div>
        <h2 class="remover" @click="removeFromCart(item.id)">Remover</h2>
      </div>
    </div>
  </div>
  <hr class="lasthr" />
  <div class="finalizacao">
    <h1 class="tot">Subtotal: R${{ total.toFixed(2).replace('.', ',') }}</h1>
    <div class="comprar">
      <button>Fechar Pedido</button>
    </div>
  </div>
</template>
<style scoped>
.comprar {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 20px; /* Ou qualquer outro valor em pixels */
  padding: 10px;
  font-size: x-large;
  font-weight: 500;
}

.comprar:hover {
  background-color: rgba(212, 186, 163, 0.8);
}

.remover:hover {
  cursor: pointer;
}

.finalizacao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.tot {
  font-size: xx-large;
}

.remover {
  font-size: large;
  margin: 0px;
  padding: 0px;
  color: red;
}

.status {
  font-size: x-large;
  margin: 0px;
  padding: 0px;
  color: green;
}

.nome {
  font-size: xx-large;
  margin: 0px;
  padding: 0px;
}

.preco {
  font-size: x-large;
  margin: 0px;
  padding: 0px;
  line-height: 0%;
  margin-bottom: 15px;
  margin-top: 5px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
}

.produto {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.carrinho {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.carrinhoh1 {
  font-size: xx-large;
  margin-left: 10%;
  padding: 0px;
  margin-bottom: 10px;
  margin-top: 30px;
}
hr {
  height: 2px;
  background-color: rgb(62, 62, 62);
  border: none;
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
}

.lasthr {
  height: 2px;
  background-color: rgb(62, 62, 62);
  border: none;
  width: 80%;
  margin: auto;
}
</style>
