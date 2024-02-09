export const GeneralInfoComponent = {
    props: ['info'],
    template: `
        <div>
            <div class="card-deck">
                <!-- Traffic Card -->
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Traffic</h5>
                        <div class="traffic-scale">
                            <div class="traffic-bar" :class="trafficClass(info.traffic)"></div>
                        </div>
                    </div>
                </div>

                <!-- Temperature Card -->
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Average Temperature</h5>
                        <p class="card-temp" :style="{ color: temperatureColor(info.temperature) }">{{ info.temperature }}°</p>
                    </div>

                <!-- Walkability Card -->
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Walkability</h5>
                        <canvas id="walkabilityChart"></canvas>
                    </div>
                </div>

                <!-- Cost of Living Card -->
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Cost of Living</h5>
                        <p class="card-text cost-indicator">{{ costOfLivingIndicator(info.costOfLiving) }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        // Initialize the chart here
        this.initWalkabilityChart();
    },
    methods: {
        trafficClass(traffic) {
            return {
                'low': traffic === 'Low',
                'moderate': traffic === 'Moderate',
                'high': traffic === 'High'
            };
        },
        temperatureColor(temp) {
            if (temp < 50) return 'blue';
            if (temp < 60) return 'purple';
            if (temp < 70) return 'green';
            if (temp < 80) return 'orange';
            return 'red';       
        },
        costOfLivingIndicator(cost) {
            switch (cost) {
                case 'Low': return '$';
                case 'Moderate': return '$$';
                case 'High': return '$$$';
                default: return cost;
            }
        },
        initWalkabilityChart() {
            // Initialize Chart.js for walkability
            const ctx = document.getElementById('walkabilityChart').getContext('2d');
        }
    }    
};
