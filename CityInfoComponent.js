import TabComponent from './TabComponent.js';

const CityInfoComponent = {
    template: `
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item" v-for="tab in tabs" :key="tab.name">
                    <a class="nav-link" :class="{ active: currentTab === tab }" @click="currentTab = tab">{{ tab.name }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <tab-component v-for="tab in tabs" :key="tab.name" :tab="tab" v-if="currentTab === tab"></tab-component>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: [
                { name: 'General Info', content: { traffic: 'low', temperature: 90, costOfLiving: 'high' } },
                { name: 'Restaurants', content: [
                    { name: 'Distant Relatives', description: 'Food truck in Meanwhile Brewing Co.', cost: '$$', get: ['Quarter Chicken', 'Brisket Sandwich'] },
                    { name: 'Loro', description: 'Asian smokehouse and bar', cost: '$$', get: ['Smoked Beef Brisket', 'Pork Belly'] },
                    { name: 'Uchi', description: 'Upscale Japanese dining', cost: '$$$$', get: ['Hamachi Nabe', 'Walu Walu'] }
                ] },
                { name: 'Events', content: [
                    { name: 'Austin City Limits Music Festival', description: 'Annual music festival held in Zilker Park', date: 'October 1-3, 2021' },
                    { name: 'SXSW', description: 'Annual festival celebrating the convergence of the interactive, film, and music industries', date: 'March 11-20, 2022' }
                ] },
                { name: 'Areas', content: [
                    { name: 'Downtown', description: 'The heart of the city with a variety of restaurants, shops, and entertainment' },
                    { name: 'East Austin', description: 'Known for its food trucks, art galleries, and vibrant nightlife' }
                ] },
                { name: 'Bars', content: [
                    { name: 'Whisler\'s', description: 'Craft cocktails in a historic building', cost: '$$', get: ['Old Fashioned', 'Mezcal Mule'] },
                    { name: 'The Roosevelt Room', description: 'Upscale bar with a variety of cocktails', cost: '$$$', get: ['The Roosevelt', 'The Gin Fizz'] }
                ] }

            ],
            currentTab: tabs[0]
        };
    },
    components: {
        'tab-component': TabComponent
    }
};

export default CityInfoComponent;
