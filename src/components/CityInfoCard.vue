<template>
    <v-card class="city-info-card" hover>
      <v-row no-gutters>
        <v-col cols="3" class="icon-container" :class="severityClass">
          <v-icon large>{{ icon }}</v-icon>
        </v-col>
        <v-col cols="9" class="info-container">
          <v-card-title class="card-title" :class="severityClass">{{ title }}</v-card-title>
          <v-card-text class="card-text" :class="severityClass">
            <template v-if="isTemperature">
              {{ formatTemperature(content) }}
            </template>
            <template v-else-if="isCost">
              {{ formatCost(content) }}
            </template>
            <template v-else>
              {{ content }}
            </template>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  
  <script>
  export default {
    props: {
      title: String,
      content: [String, Number],
      icon: String
    },
    computed: {
      severityClass() {
        return `severity-${this.computeSeverity}`;
      },
      isTemperature() {
        return this.title.toLowerCase().includes('temperature');
      },
      isCost() {
        return this.title.toLowerCase().includes('cost');
      },
      computeSeverity() {
        if (this.isTemperature) {
          return this.getTemperatureSeverity(this.content);
        } else if (this.isCost) {
          return this.getCostSeverity(this.content);
        }
        // check if it is a rating ie "2/10"
        if (this.content.includes('/')) {
          const rating = this.content.split('/')[0];
          if (rating >= 7) return 'high';
          if (rating >= 4) return 'moderate';
          return 'high';
        }

        if (this.content === 'Moderate') return 'moderate';
        if (this.content === 'High') return 'high';
        return 'low'; // Default severity
      }
    },
    methods: {
      formatTemperature(value) {
        return `${value}°F`;
      },
      formatCost(value) {
        return '$'.repeat(value);
      },
      getTemperatureSeverity(temperature) {
        if (temperature >= 80) return 'low';
        if (temperature >= 70) return 'moderate';
        return 'low';
      },
      getCostSeverity(cost) {
        if (cost >= 4) return 'high';
        if (cost >= 2) return 'moderate';
        return 'low';
      }
    }
  };
  </script>
  
  
  <style scoped>
  .city-info-card {
    background: linear-gradient(145deg, #31354b, #2b2e40);
    color: #e3e4e6;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }
  
  .city-info-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .severity-low {
    color: #e53935; /* Red for high severity */
  }
  
  .severity-moderate {
    color: #fdd835; /* Yellow for medium severity */
  }
  
  .severity-high {
    color: #4caf50; /* Green for low severity */
  }
  
  .card-title {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
  }
  
  .card-text {
    font-size: 1rem;
  }
  
  /* Adjust icon size if necessary */
  .v-icon {
    font-size: 2rem; /* Larger icon size */
  }
  </style>
  
  