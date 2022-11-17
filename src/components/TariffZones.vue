<script setup>
import { onBeforeMount } from "vue";
import { useZoneStore } from "@/stores/store";

import TarrifZones_Search from "@/components/TarrifZones_Search.vue";
import TarrifZones_List from "@/components/TarrifZones_List.vue";

// Variables
const zoneStore = useZoneStore();

// Function
onBeforeMount(() => {
  zoneStore.getZonesFromJSON();
});
</script>

<template>
  <div class="tarrif-zones">
    <TarrifZones_Search />
    <TarrifZones_List />
  </div>
</template>

<style scoped>
.tarrif-zones {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
