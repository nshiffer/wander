const RestaurantComponent = {
    props: ['item'],
    template: `
        <div class="card mb-3 shadow-lg">
            <div class="card-body">
                <!-- Restaurant Name -->
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <div>
                        <a :href="item.website" target="_blank" class="btn btn-primary btn-sm">Website</a>
                    </div>
                </div>

                <!-- Description -->
                <p class="card-text">{{ item.description }}</p>

                <!-- Cost -->
                <div class="mb-2">
                    <strong>Cost:</strong> <span>{{ item.cost }}</span>
                </div>

                <!-- Get Section -->
                <div v-if="item.recommendations.length" class="mb-2">
                    <strong>Get:</strong>
                    <ul>
                        <li v-for="recommendation in item.recommendations" :key="recommendation">{{ recommendation }}</li>
                    </ul>
                </div>

                <!-- Skip Section -->
                <div v-if="item.skips.length" class="mb-2">
                    <strong>Skip:</strong>
                    <ul>
                        <li v-for="skip in item.skips" :key="skip">{{ skip }}</li>
                    </ul>
                </div>

                <!-- Notes and Score -->
                <div class="mt-3">
                    <div v-if="item.notes">
                        <strong>Notes:</strong>
                        <p>{{ item.notes }}</p>
                    </div>
                    <span class="badge" :class="scoreClass(item.score)">Score: {{ item.score }}/10</span>
                </div>
            </div>
        </div>
    `,
    methods: {
        scoreClass(score) {
            if (score >= 6) return 'badge-success';
            if (score >= 4) return 'badge-warning';
            return 'badge-danger';
        }
    }
};

export { RestaurantComponent };