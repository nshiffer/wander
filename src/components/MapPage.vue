<template>
    <div id="map" class="map-container"></div>
  </template>
  <script>
  import L from 'leaflet';
  
  export default {
    name: 'MapPage',
    data() {
      return {
        map: null,
        tileLayer: null,
        markers: [
          { name: 'Austin, TX', latLng: [30.2672, -97.7431], link: '/#/austin' },
            { name: 'Atlanta, GA', latLng: [33.7490, -84.3880], link: '/atlanta' },
            { name: 'Ashville, NC', latLng: [35.5951, -82.5515], link: '/ashville' },
            { name: 'Raleigh, NC', latLng: [35.7796, -78.6382], link: '/raleigh' },
            { name: 'Boston, MA', latLng: [42.3601, -71.0589], link: '/boston' },
            { name: 'Chicago, IL', latLng: [41.8781, -87.6298], link: '/chicago' },
            { name: 'New York, NY', latLng: [40.7128, -74.0060], link: '/new-york' },
            { name: 'Seattle, WA', latLng: [47.6062, -122.3321], link: '/seattle' },
            { name: 'Washington, D.C.', latLng: [38.9072, -77.0369], link: '/washington-dc' }, 
          // You can add more locations here
        ],
      };
    },
    mounted() {
      this.initMap();
      this.addMarkers();
    },
    methods: {
      initMap() {
        this.map = L.map('map').setView([37.8, -96.9], 4); // Center on the USA
        this.tileLayer = L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors',
          }
        ).addTo(this.map);
      },
      addMarkers() {
        this.markers.forEach(marker => {
          L.marker(marker.latLng)
            .addTo(this.map)
            .bindPopup(`<a href="${marker.link}">${marker.name}</a>`);
        });
      },
    },
  };
  </script>
<style scoped>
</style>
  