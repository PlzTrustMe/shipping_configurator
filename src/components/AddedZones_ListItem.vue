<script setup>
import AddedZones_ItemSurcharge from "@/components/AddedZones_ItemSurcharge.vue"

import { useZoneStore } from "@/stores/store";

defineProps({
  zone: Object,
});

const zoneStore = useZoneStore();
</script>

<template>
  <div class="added_zones__item">
    <ul>
      <li>
        {{ zone.name }}
        <button @click="zoneStore.removeFromSelectedZones(zone.id)">
          Удалить
        </button>
      </li>
    </ul>
    <AddedZones_ItemSurcharge />
  </div>
</template>

<style scoped>
.added_zones__item {
  border: 5px solid black;
  margin-bottom: 20px;
}

.added_zones__item li {
  width: 100%;
  border-bottom: 1px solid #000;
}
</style>
