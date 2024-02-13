<template>
    <v-container fluid class="map-page-container">
      
      <!-- Floating Header -->
      <div class="overlay-header">
        <div color="transparent" dense flat>
          <v-toolbar-title class="title">Navigator's Log</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- You can add more navigation items or actions here -->
        </div>
      </div>
  
      <!-- Full-width Map -->
      <MapPage />
      
      <!-- Floating Description Panel -->
      <div class="floating-description">
        <h1>Wander</h1>
        <p>Each pin marks a destination that we've stopped at. Click on the pins to learn about our favorites in each spot</p>
      </div>
      
      <!-- Multiple Floating Action Buttons -->
      <div class="fab-container">
        <!-- Button to learn more -->
        <v-btn fab dark small color="#4CAF50" class="map-fab" @click="addLocation">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        
        <!-- Button to go to a random location -->
        <v-btn fab dark small color="#FFC107" class="map-fab" @click="gotoRandomLocation">
          <v-icon>mdi-shuffle-variant</v-icon>
        </v-btn>
        
        <!-- Button to show all locations -->
        <v-btn fab dark small color="#2196F3" class="map-fab" @click="showAllLocations">
          <v-icon>mdi-map-marker-multiple</v-icon>
        </v-btn>
      </div>
      
      <!-- Floating Footer -->
      <div class="overlay-footer">
        <v-footer color="transparent" padless>
          <v-col class="text-center">© {{ new Date().getFullYear() }} - Explorer's Footprint</v-col>
        </v-footer>
      </div>
      
    </v-container>
  </template>
  
  
  
  <script>
import MapPage from './MapPage.vue';

export default {
  components: {
    MapPage,
    // other components if necessary
  },
  methods: {
    addLocation() {
      // Logic to add a new location
    },
    gotoRandomLocation() {
      // Logic to navigate to a random location
    },
    showAllLocations() {
      // Logic to zoom out and show all locations
    },
  },
};
</script>

  
  <style scoped>
  .map-page-container {
    position: relative;
    height: 100vh; /* Full height */
    padding: 0; /* No padding */
    background-color: #121212; /* Dark theme background */
  }
  
  .overlay-header,
  .overlay-footer {
    position: absolute;
    width: 100%;
    z-index: 5;
  }
  
  .overlay-header {
    top: 0;
  }
  
  .overlay-footer {
    bottom: 0;
  }
  
  .title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
    color: #121212
  }
  
  .map-container {
    height: 100vh; /* Full height */
    z-index: 1;
  }
  
  .floating-description {
    position: absolute;
    top: 10vh;
    left: 5vw;
    max-width: 40vw;
    background: rgba(26, 26, 26, 0.8); /* Semi-transparent background */
    padding: 20px;
    border-radius: 8px;
    z-index: 5;
    color: #e3e4e6;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  
  .floating-description h1 {
    color: #4CAF50;
    margin-bottom: 0.5em;
  }
  
  .floating-description p {
    font-size: 1em;
    line-height: 1.5;
  }

  
  /* Style adjustments for map zoom controls and other elements */
  .leaflet-control-zoom {
    margin-right: 2vw;
    margin-top: 10vh;
  }
  
  /* Additional styling for map pins and popups */
  .leaflet-popup-content a {
    color: #4CAF50;
  }
  
  @media (max-width: 600px) {
    .floating-description {
      left: 3vw;
      max-width: 90vw;
    }
  
    .map-fab {
      bottom: 15vh;
    }
  }

  .fab-container {
  position: absolute;
  right: 2vw;
  bottom: 20vh;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.map-fab {
  margin-bottom: 1em; /* Space between FABs */
  transition: transform 0.2s, box-shadow 0.2s;
}

.map-fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .fab-container {
    bottom: 15vh;
  }

  .map-fab {
    width: 40px;
    height: 40px;
    min-width: 40px;
    padding: 8px;
  }
}
  </style>
  