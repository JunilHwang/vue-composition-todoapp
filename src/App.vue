<template>
  <div id="nav">
    <router-link to="/step1">Step1</router-link> |
    <router-link to="/step2">Step2</router-link> |
    <router-link to="/step3">Step3</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background: #f5f5f5;
}

:focus {
  outline: 0;
}
</style>
