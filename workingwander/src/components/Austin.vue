<template>
    <v-container fluid class="dashboard-container">
      <div class="header-container">
      </div>
  
      
    <v-row class="control-panel">
      <v-col cols="12">
        <v-tabs
            v-model="tab"
            class="tab-switches"
            grow
            >
          <v-tab v-for="tabItem in tabs" :key="tabItem" :value="tabItem">
            {{ tabItem }}
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item
                key="General Info"
                value="General Info"
                class="tab-content"
                >
            <v-container>
              <v-row>
                <v-col cols="12" md="6" lg="4" v-for="item in cityInfo" :key="item.title">
                  <city-info-card :title="item.title" :content="item.content" :icon="item.icon" />
                </v-col>
              </v-row>
            </v-container>
            </v-window-item>
            <v-window-item
                key="Restaurants"
                value="Restaurants"
                class="tab-content"
                >
  <v-container>
    <v-row>
      <v-col
        cols="12" md="6" lg="4"
        v-for="restaurant in sortedRestaurants"
        :key="restaurant.name"
      >
        <restaurant-info-card
          :name="restaurant.name"
          :description="restaurant.description"
          :cost="restaurant.cost"
          :get="restaurant.get"
          :skip="restaurant.skip"
          :rating="restaurant.rating"
          :notes="restaurant.notes"
        />
      </v-col>
    </v-row>
  </v-container>
</v-window-item>
</v-window>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import CityInfoCard from './CityInfoCard.vue';
  import RestaurantInfoCard from './RestaurantInfoCard.vue';
  
  export default {
    components: {
      CityInfoCard,
      RestaurantInfoCard 
    },
    data: () => ({
        tabs: ['General Info', 'Restaurants'],
        tab: 'General Info', // Set default active tab
      cityName: 'Austin, TX',
      citySkyline: '/assets/austin.jpg',
      cityInfo: [
        { title: 'Traffic Rating', content: 'Moderate', icon: 'mdi-car' },
        { title: 'Cost of Living', content: '3', icon: 'mdi-cash' },
        { title: 'Temperature', content: 32, icon: 'mdi-thermometer' },
        { title: 'Walkability', content: 'Moderate', icon: 'mdi-walk' },
        { title: 'Public Transit', content: 'Low', icon: 'mdi-bus' },
        { title: 'Safety', content: 'High', icon: 'mdi-shield' },
        { title: 'Events', content: '9/10', icon: 'mdi-calendar' },
        { title: 'Food', content: '7/10', icon: 'mdi-food' },
        { title: 'Overall Rating', content: '7/10', icon: 'mdi-star' }
      ],
      restaurants: [
      { name: 'Distant Relatives', description: 'Food truck in Meanwhile Brewing Co.', cost: '2', get: ['Quarter Chicken', 'Brisket Sandwich'] , skip: ['Braut'], rating:'9/10', notes: 'Favorate BBQ in Austin and maybe ever.'},
      { name: 'Uchi', description: 'Japanese fine dining/Sushi', cost: '4', get: ['Anchovi Roll'] , skip: [''], rating:'7/10', notes: 'Amazing but pricey'},
      { name: 'Waffle Love', description: 'Chicken & waffle food truck in North Austin', cost: '2', get: ['Chicken & Waffles', 'Nutella Waffles'] , skip: [''], rating:'8/10', notes: 'Amazing chicken and waffles, sometimes free downtown during SXSW'},
      { name: 'Ramen Tatsuya', description: 'Ramen Place with Various Locations', cost: '2', get: ['Miso Hot'] , skip: ['Tsukamen'], rating:'7.5/10', notes: ''}
    ]
    }),
    computed: {
    sortedRestaurants() {
      return this.restaurants.sort((a, b) => {
        const ratingA = parseInt(a.rating.replace('/10', ''), 10);
        const ratingB = parseInt(b.rating.replace('/10', ''), 10);
        return ratingB - ratingA; // Sort by descending order
      });
    }
  }
  };
  
  </script>
<style scoped>
.dashboard-container {
  background-color: #3a3f55; /* Slightly lighter shade for the dashboard */
  color: #e3e4e6; /* Soft white text for readability */
  height: auto;
  font-family: 'Roboto', sans-serif; /* Modern, readable font */
}

.header-container {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/austin.jpg');
  background-size: cover;
  background-position: center;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px; /* Smooth corners for the header */
}

.city-name h1 {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px; /* Rounded corners for the city name background */
  font-family: 'Roboto', sans-serif; /* Consistent font with the rest */
}

.control-panel {
  margin-top: -10vh; /* Overlapping the image */
  background-color: rgba(255, 255, 255, 0.1); /* Translucent background */
  backdrop-filter: blur(5px); /* Blur effect */
  border-radius: 10px; /* Rounded corners for the control panel */
  padding: 20px;
}

.tab-switches .v-tab {
  color: #fff;
  margin-right: 8px;
  border-bottom: 3px solid transparent; /* Thicker border for better visibility */
  font-weight: bold; /* Make the text bold */
}

.tab-switches .v-tab--active {
  border-color: #4CAF50; /* Green color for active tab indicator */
  background-color: rgba(0, 0, 0, 0.2); /* Slightly darker background for active tab */
}
.city-info-card {
  background: linear-gradient(145deg, #414a5c, #2e3342); /* Lighter gradient for the card */
  color: #e3e4e6;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adjusted shadow for depth */
  transition: transform 0.3s ease-in-out;
}

.city-info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25); /* Slightly deeper shadow on hover */
}


/* Ensure icons and text align properly */
.city-info-card .v-icon {
  font-size: 2rem; /* Larger icons */
}

.city-info-card .card-title,
.city-info-card .card-text {
  margin-left: 8px; /* Spacing between icon and text */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .city-info-card .v-icon {
    font-size: 1.5rem; /* Smaller icons for mobile */
  }
  .header-container {
    height: 30vh; /* Shorter header on mobile */
  }
  .control-panel {
    margin-top: -5vh; /* Less overlap on mobile */
  }
}

/* Additional specific styles as needed */
</style>
