<script setup>
import AddedZones_ListItem from "@/components/AddedZones_ListItem.vue";

import { useZoneStore } from "@/stores/store";
import { computed } from "@vue/runtime-core";
import { storeToRefs } from "pinia";

const { selectedZones } = storeToRefs(useZoneStore());

const sortZonesByAlhabet = computed(() => {
  return selectedZones.value.sort((a, b) => (a.name > b.name ? 1 : -1));
});
</script>

<template>
  <div v-if="selectedZones.length > 0" class="selectedZones">
    <AddedZones_ListItem
      v-for="zone in sortZonesByAlhabet"
      :key="zone.id"
      :zone="zone"
    />
  </div>
</template>

<style scope></style>
