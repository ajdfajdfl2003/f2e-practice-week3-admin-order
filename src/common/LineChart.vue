<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  data () {
    return {
      chartOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    let vm = this

    this.renderChart({
      labels: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
      datasets: [
        {
          label: 'Revenue',
          borderColor: '#7ED321',
          pointBackgroundColor: '#7ED321',
          borderWidth: 3,
          pointBorderColor: '#7ED321',
          backgroundColor: 'transparent',
          data: [8000, 6000, 5600, 7200, 7800, 6000, 5500, 4877]
        },
        {
          label: 'Cost',
          borderColor: '#D0021B',
          pointBackgroundColor: '#D0021B',
          pointBorderColor: '#D0021B',
          borderWidth: 3,
          backgroundColor: 'transparent',
          data: [6001, 5500, 6141, 5748, 5784, 6780, 6001, 5487]
        },
        {
          label: 'Net Income',
          borderColor: '#4A90E2',
          pointBackgroundColor: '#4A90E2',
          pointBorderColor: '#4A90E2',
          borderWidth: 3,
          backgroundColor: 'transparent',
          data: [1001, 1200, 3320, 3587, 2358, 1567, 2451, 2368]
        }
      ]
    }, vm.chartOptions)
  }
}
</script>
