<script setup>
import TariffZones from "@/components/TariffZones.vue";
import AddedZones from "@/components/AddedZones.vue";
</script>

<template>
  <div class="wrapper">
    <TariffZones />
    <AddedZones />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  width: 1000px;
  padding: 10px;
  margin-top: 10px;
}

button {
  background: #3c78d8;
  color: white;
  padding: 10px;
  border-radius: 10%;
  margin-right: 10px;
}

.wrapper {
  display: flex;
}

.added_zone {
  height: 100vh;
  width: 50%;
}
</style>
