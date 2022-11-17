import { defineStore } from "pinia";
import axios from "axios";

export const useZoneStore = defineStore("zoneStore", {
  state: () => {
    return {
      zones: [],
      selectedZones: [],
      searchText: "",
    };
  },

  actions: {
    async getZonesFromJSON() {
      try {
        const response = await axios.get(`http://localhost:3000/zones`);
        this.zones = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    addToSelectedZones(id) {
      const zone = this.zones.find((el) => {
        return el.id === id;
      });

      this.selectedZones.push({
        id: zone.id,
        name: zone.name,
      });
    },

    removeFromSelectedZones(id) {
      this.selectedZones = this.selectedZones.filter((el) => {
        return el.id !== id;
      });
    },

    checkZoneInAddedZones(id) {
      return this.selectedZones.some((el) => el.id === id);
    },
  },
});
