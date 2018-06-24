<template>
  <div class="main">
    <div class="container">
      <div class="row info-panel">
        <h2>OVERVIEW</h2>
        <div class="filter">
          date filter
        </div>
      </div>
      <div class="row">
        <div class="card card-total">
          <div class="title">
            <i class="fas fa-hand-holding-usd"></i>
            <span>TOTAL REVENUE</span>
          </div>
          <span class="num green">$54,540</span>
        </div>
        <div class="space"></div>
        <div class="card card-total">
          <div class="title">
            <i class="fas fa-boxes"></i>
            <span>TOTAL COST</span>
          </div>
          <span class="num red">$12,660</span>
        </div>
        <div class="space"></div>
        <div class="card card-total">
          <div class="title">
            <i class="fas fa-money-bill-wave"></i>
            <span>NET INCOME</span>
          </div>
          <span class="num blue">$41,880</span>
        </div>
      </div>
      <div class="row">
        <div class="card card-activity">
          <div class="h3-title">
            <h3>Activity</h3>
          </div>
          <div class="chart">
            <activity-line
              :height="300"></activity-line>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card card-two-column">
          <div class="h3-title">
            <h3>Transaction Website</h3>
          </div>
          <div class="chart-zone"></div>
        </div>
        <div class="space"></div>
        <div class="card card-two-column">
          <div class="h3-title">
            <h3>Latest Orders</h3>
          </div>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityLine from '@/common/LineChart'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    ActivityLine
  }
}
</script>
