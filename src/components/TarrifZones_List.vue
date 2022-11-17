<script setup>
import TarrifZones_ListItem from "@/components/TarrifZones_ListItem.vue";

import { computed } from "vue";

import { useZoneStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const { searchText, zones } = storeToRefs(useZoneStore());

// Computed
const searchHandler = computed(() => {
  return searchText.value.length === 0
    ? zones.value.slice(0, 10)
    : zones.value.filter((zone) => {
        return zone.name.includes(
          searchText.value[0].toUpperCase() + searchText.value.slice(1)
        );
      });
});
</script>

<template>
  <div class="tarrif-zones__list">
    <TarrifZones_ListItem class="tarrif-zones__list-item"
      v-for="zone in searchHandler"
      :key="zone.id"
      :zone="zone"
    />
  </div>
</template>

<style scoped>
.tarrif-zones__list-item {
  border: 1px solid black;
  margin-top: 20px;
}
</style>
