import HeaderComponent from './HeaderComponent.js';
import FooterComponent from './FooterComponent.js';
import TabComponent from './TabComponent.js';
import RestaurantComponent from './RestaurantComponent.js';
import GeneralInfoComponent from './GeneralInfoComponent.js';
import CityInfoComponent from './CityInfoComponent.js';

const app = Vue.createApp({
    data() {
        let austinData = {
            generalInfo: { traffic: 'low', temperature: 90, costOfLiving: 'high' },
            restaurants: [
                { name: 'Distant Relatives', description: 'Food truck in Meanwhile Brewing Co.', cost: '$$', get: ['Quarter Chicken', 'Brisket Sandwich'] },
                { name: 'Loro', description: 'Asian smokehouse and bar', cost: '$$', get: ['Smoked Beef Brisket', 'Pork Belly'] },
                { name: 'Uchi', description: 'Upscale Japanese dining', cost: '$$$$', get: ['Hamachi Nabe', 'Walu Walu'] }
            ],
            events: [
                { name: 'Austin City Limits Music Festival', description: 'Annual music festival held in Zilker Park', date: 'October 1-3, 2021' },
                { name: 'SXSW', description: 'Annual festival celebrating the convergence of the interactive, film, and music industries', date: 'March 11-20, 2022' }
            ],
            areas: [
                { name: 'Downtown', description: 'The heart of the city with a variety of restaurants, shops, and entertainment' },
                { name: 'East Austin', description: 'Known for its food trucks, art galleries, and vibrant nightlife' }
            ],
            bars: [
                { name: 'Whisler\'s', description: 'Craft cocktails in a historic building', cost: '$$', get: ['Old Fashioned', 'Mezcal Mule'] },
                { name: 'The Roosevelt Room', description: 'Upscale bar with a variety of cocktails', cost: '$$$', get: ['The Roosevelt', 'The Gin Fizz'] }
            ]
        };
        console.log(austinData);
        return {
            austinTabs: [
                { name: 'General Info', content: austinData.generalInfo },
                { name: 'Restaurants', content: austinData.restaurants },
                // { name: 'Events', content: austinData.events },
                // { name: 'Areas', content: austinData.areas },
                // { name: 'Bars', content: austinData.bars }
            ]
        };
    },
    components: {
        'city-info-component': CityInfoComponent,
        'general-info-component': GeneralInfoComponent,
        'tab-component': TabComponent,
        'restaurant-component': RestaurantComponent,
        'general-info-component': GeneralInfoComponent,
    }
});
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);
app.mount('#app');
