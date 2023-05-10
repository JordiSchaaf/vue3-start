<template>
  <nav class="navbar is-transparent">
    <a class="navbar-item">
      Button 1
    </a>
    <a class="navbar-item">
      Button 2
    </a>
    <a class="navbar-item">
      Button 3
    </a>
    <button class="button navbar-button">
      <mdicon name="menu" />
      <mdicon name="account-circle" /> 
    </button>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.navbar {
  background-color: transparent;
  height: 52px;
  display: flex;
  align-items: center;

  &-item {
    padding: .25rem .5rem;
    margin: 0 .5rem;
    color: $text-body;
    
    &:hover {
      color: black !important;
    }
  }

  &-button {
    padding: .5em 1em;
    gap: .25em;
    border: none;
    border-radius: 5em;
    background-color: transparent;

    &:hover {
      background-color: $background-2;
    }
  }
}

</style>