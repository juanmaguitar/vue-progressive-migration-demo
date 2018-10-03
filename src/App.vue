<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

import NewsApiService from './services/NewsApiService.js'
const DEFAULT_QUERY = 'javascript'

export default {
  name: 'App'
}
</script>
