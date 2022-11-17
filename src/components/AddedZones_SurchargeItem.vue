<script setup>
import { ref } from "vue";

const kgFirstInput = ref("");
const kgSecondInput = ref("");
</script>

<template>
  <div class="surcharge-item">
    <div class="surcharge-item__input-kilo">
      <input type="number" v-model="kgFirstInput" />
      <span>кг -</span>
      <input type="number" v-model="kgSecondInput" />
      <span>кг</span>
    </div>
    <div class="surcharge-item__input-result">
      <div class="input-with-result">
        <input />
        <span>₽</span>
        <button>Удалить наценку</button>
      </div>
    </div>
  </div>
  <div class="price">
    <p>Итоговая стоимость: 220 ₽</p>
  </div>
</template>

<style scoped>
input {
  width: 150px;
  height: 30px;
  text-align: right;
  font-size: 18px;
}
.surcharge-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 10px;
  border-top: 1px solid #000;
}

.input-with-result button {
  margin-left: 50px;
}

.input-with-result span {
  margin-left: 25px;
}

.price {
  display: flex;
  justify-content: end;
}

.price p {
  color: grey;
  margin-right: 190px;
}
</style>
