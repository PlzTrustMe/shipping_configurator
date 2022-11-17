<script setup>
import { useZoneStore } from "@/stores/store";

defineProps({
  zone: Object,
});

const zoneStore = useZoneStore();
</script>

<template>
  <div>
    <ul>
      <li class="tarrif-zones__item">
        {{ zone.name }}
        <button
          v-if="!zoneStore.checkZoneInAddedZones(zone.id)"
          @click="zoneStore.addToSelectedZones(zone.id)"
        >
          Добавить
        </button>
        <button v-else @click="zoneStore.removeFromSelectedZones(zone.id)">
          Удалить
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
