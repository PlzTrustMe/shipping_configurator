<script setup>
import AddedZones_SurchargeItem from "@/components/AddedZones_SurchargeItem.vue";

import { ref } from "vue";

const surchargeInput = ref("");
const surchargeCounter = ref(0);

const setTwoNumberDecimal = () => {
  surchargeInput.value = parseFloat(surchargeInput.value).toFixed(2);
};

const addPointToCounter = () => {
  surchargeCounter.value++;
};
</script>

<template>
  <div class="added_zones__item-surcharge">
    <div class="surcharge-input">
      <span>Базовая стоимость доставки:</span>
      <input
        v-model="surchargeInput"
        type="number"
        step="0.01"
        @change="setTwoNumberDecimal"
      />
      <span>₽</span>
    </div>
    <button @click="addPointToCounter">Добавить наценку</button>
  </div>

  <AddedZones_SurchargeItem
    v-for="(surcharge, index) in surchargeCounter"
    :key="index"
  />
</template>

<style scoped>
.added_zones__item-surcharge {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  padding-bottom: 50px;
}
.surcharge-input span,
.surcharge-input input {
  margin-right: 10px;
}

.surcharge-input input {
  width: 150px;
  height: 30px;
  text-align: right;
  font-size: 18px;
}
</style>
