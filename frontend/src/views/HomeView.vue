<script>
import ProdutoApi from '@/api/produto'
const produtoApi = new ProdutoApi()
import i1 from "../components/img/carousel/i1.png"
import i2 from "../components/img/carousel/i2.png"
import i3 from "../components/img/carousel/i3.png"
import i4 from "../components/img/carousel/i4.png"
import i5 from "../components/img/carousel/i5.png"
export default {
  data() {
    return {
      produtos: [],
      images: [], // Your array of images with "image_url"
      currentIndex: 0,
      slideWidth: 100,

    }
  },
  async created() {
    this.produtos = await produtoApi.buscarTodosOsProdutos()
    this.images = 
    [i1, i2, i3, i4, i5 ]
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  computed: {
    innerStyles() {
      return {
        transform: `translateX(-${this.currentIndex * this.slideWidth}%)`,
        transition: "transform 0.3s ease-in-out",
      };
    },
  },
}
</script>
<template>
    <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-inner" :style="innerStyles">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-slide"
        >
          <img :src="image" alt="Slide Image" class="slide-image" />
        </div>
      </div>
      <button class="next-button" @click="nextSlide">&gt;</button>
      <button class="prev-button" @click="prevSlide">&lt;</button>

    </div>
  </div>
  <div class="produtos">
    <div class="card-produto" v-for="produto in produtos" :key="produto.id">
      <img :src="produto.capa.file" alt=""/>
      <router-link :to="'/produto/' + produto.id_produto">{{ produto.nome }}</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h1{
    font-family: 'Lato', sans-serif;
    margin-left: 5%;
    padding: 5px;
    font-size: 28px;
    margin-top: 20px;
}
hr{
    background-color: black !important;
    height: 2px;
    width:90%;
    margin-left: 5%;
}
.produtos {
  /* margin: 200px; */
  margin-top: 60px;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  /* grid-auto-rows: 50%; */
}
.card-produto {
  width: 250px;
  height: 430px;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
}
img{
  width: 200px;
  height: 280px;
  border-radius: 6px;
  margin-top: 15px;
}
.carousel {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
}

.slide-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

</style>