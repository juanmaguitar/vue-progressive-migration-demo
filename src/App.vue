<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/post">Post</router-link>
        </li>
      </ul>
    </nav>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
