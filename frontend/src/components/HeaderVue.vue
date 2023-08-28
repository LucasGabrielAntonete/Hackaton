<script setup>
import { onMounted } from 'vue'

function getHeightHeader() {
  const header = document.querySelector('header')
  const menu = document.querySelector('.menu')
  let headerHeight, menuHeight
  if (header) {
    headerHeight = header.offsetHeight
    menuHeight = menu.offsetHeight
    const dropdown = document.querySelector('.dropdown')
    if (dropdown) {
      dropdown.style.top = headerHeight + menuHeight + 'px'
    }
    console.log(headerHeight)
  }
  console.log('aa')
}

window.addEventListener('resize', getHeightHeader)

onMounted(() => {
  getHeightHeader()
})
</script>

<template>
  <header>
    <div class="header">
      <RouterLink :to="{ name: 'Home' }">
        <div class="logo">
          <h1>Momento especial</h1>
          <h4>Ateliê</h4>
        </div>
      </RouterLink>
      <div class="search">
        <input type="text" class="search-input" placeholder="O que você está buscando?" />
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="icons">
        <div class="icon-heart">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="icon-bag" @click="$router.push({ name: 'CarrinhoView' })">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
              stroke="#000000"
              stroke-width="2"
            />
          </svg>
        </div>
        <div class="icon-user" @click="$router.push({ name: 'loginView' })">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <nav class="menu">
      <button class="component-nav" @click="$router.push({ name: 'Home' })">
        Home
      </button>
      <button class="component-nav" @click="$router.push({ name: 'DebutantesView' })">
        Debutantes
      </button>
      <button class="component-nav" @click="$router.push({ name: 'NoivasView' })">Noivas</button>
    </nav>
  </header>

  <!-- <div class="sticky top-0 bg-mantle shadow-lg ">
      <div class="container gap-4 py-2 items-center min-w-full"></div>
  </div> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(212, 186, 163, 1);
  align-items: center;
  padding: 10px;
  max-width: 100%;
}
h1 {
  font-family: 'Pinyon Script', cursive;
  font-size: 25px;
  margin-left: 40px !important;
  margin: 0;
}
h4 {
  font-family: 'Lato', sans-serif;
  margin-left: 40px !important;
  margin: 0;
}
h5 {
  font-family: 'Lato', sans-serif;
  margin: 0;
}
.logo {
  text-align: center;
}
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 250px;
  border-bottom: 1px solid;
}
.search-input {
  background-color: rgba(212, 186, 163, 1);
  border: 0;
  font-family: 'Lato', sans-serif;
  width: 200px;
}
.search-input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.search-input::placeholder {
  color: #00000090;
}
.icons {
  display: flex;
  margin-right: 40px;
}
.icon-heart,
.icon-bag,
.icon-user {
  padding: 15px;
  cursor: pointer;
}
.menu {
  display: flex;
  column-gap: 200px;
  justify-content: center;
  background-color: rgba(212, 186, 163, 1);
  padding: 0px;
  margin: 0;
}
.component-nav {
  cursor: pointer;
}
.component-nav:hover {
  background-color: rgb(207, 177, 152);
  border-radius: 10px;
  transform: scale(1.1);
  transition: all 0.5s;
}
.dropdown {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  /* padding: 3px; */
  background-color: rgba(212, 186, 163, 1);
  height: 30px;
  column-gap: 13vw;
}
.dropdown a:hover {
  background-color: rgb(207, 177, 152);
}
</style>
