<template>
    <v-card class="restaurant-info-card" hover>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>
        <div class="restaurant-description">{{ description }}</div>
        <div class="restaurant-cost">{{ formattedCost }}</div>
        <div class="restaurant-menu">
          <div><strong>Get:</strong> {{ get.join(', ') }}</div>
          <div><strong>Skip:</strong> {{ skip.join(', ') }}</div>
        </div>
        <div class="restaurant-rating"><strong>Rating:</strong> {{ rating }}</div>
        <div class="restaurant-notes">{{ notes }}</div>
      </v-card-text>
    </v-card>
  </template>
<script>
export default {
  props: {
    name: String,
    description: String,
    cost: Number,
    get: Array,
    skip: Array,
    rating: String,
    notes: String
  },
  computed: {
    formattedCost() {
      return '$'.repeat(this.cost);
    }
  }
};
</script>
<style scoped>
.restaurant-info-card {
  margin-bottom: 20px;
  border-radius: 8px;
  background: linear-gradient(to right, #414a5c, #2e3342); /* Gradient background */
  color: #e3e4e6; /* Soft white text for readability */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Deeper shadow for depth */
  transition: transform 0.2s ease-in-out; /* Smooth transition for hover effect */
}

.restaurant-info-card:hover {
  transform: translateY(-4px); /* Slight raise effect on hover */
}

.v-card-title {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #ffffff; /* White color for titles */
  padding-bottom: 8px; /* More space below the title */
  border-bottom: 1px solid #555; /* Subtle border for visual separation */
  margin-bottom: 16px; /* Space after the title */
}

.restaurant-description {
  margin-bottom: 12px;
  font-style: italic;
  color: #d1d1d1; /* Lighter text for descriptions */
}

.restaurant-cost {
  font-weight: bold;
  color: #4caf50; /* Green color for cost to keep consistency */
  margin-bottom: 12px;
}

.restaurant-menu {
  margin-bottom: 12px;
  font-size: 1rem;
  color: #c2c2c2; /* Lighter text for menu items */
}

.restaurant-menu strong {
  color: #e3e4e6; /* Soft white text for 'Get' and 'Skip' */
}

.restaurant-rating {
  font-weight: bold;
  color: #ffca28; /* Yellow color for standout */
  margin-bottom: 12px;
}

.restaurant-notes {
  font-size: 0.9rem;
  color: #a1a1a1; /* Grey color for subtle notes */
  margin-top: 12px; /* Space before notes */
  border-top: 1px solid #555; /* Subtle border for visual separation */
  padding-top: 8px; /* Padding above notes */
}

/* Additional specific styles as needed */
</style>

  