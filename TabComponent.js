import { RestaurantComponent } from './RestaurantComponent.js';
import GeneralInfoComponent from './GeneralInfoComponent.js';
const TabComponent = {
    props: ['tab'],
    template: `
        <div class="tab-pane">
            <h2>{{ tab.name }}</h2>
            <restaurant-component v-if="tab.name === 'Restaurants'" v-for="restaurant in tab.content" :key="restaurant.name" :item="restaurant"></restaurant-component>
            <general-info-component v-if="tab.name === 'General Info'" :info="tab.content"></general-info-component>
        
        </div>
    `,
    components: {
        'restaurant-component': RestaurantComponent,
        'general-info-component': GeneralInfoComponent,
        // 'event-component': EventComponent,
        // 'activity-component': ActivityComponent,
        // 'area-component': AreaComponent
    }
};

export default TabComponent;
