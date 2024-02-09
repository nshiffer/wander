import { TabComponent } from './TabComponent.js';

const CityInfoComponent = {
    template: `
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item" v-for="tab in tabs" :key="tab.name">
                    <a class="nav-link" :class="{ active: currentTab === tab }" @click="currentTab = tab">{{ tab.name }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <tab-component v-if="currentTab" :tab="currentTab"></tab-component>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: [
                { name: 'General Info', content: [] }, 
                { name: 'Restaurants', content: [] }, 
                { name: 'Events', content: [] }, 
                { name: 'Activities', content: [] },
                { name: 'Areas', content: []}

            ],
            currentTab: null
        };
    },
    components: {
        'tab-component': TabComponent
    }
};

export { CityInfoComponent };
