<script setup>
import { useZoneStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const { searchText } = storeToRefs(useZoneStore());
</script>

<template>
  <div class="tarrif-zones__search">
    <input
      v-model="searchText"
      type="text"
      placeholder="Искать тарифную зону по названию..."
    />
  </div>
</template>

<style scoped>
.tarrif-zones__search input {
  height: 50px;
  width: 600px;
  font-size: 24px;
  padding-left: 10px;
}
</style>