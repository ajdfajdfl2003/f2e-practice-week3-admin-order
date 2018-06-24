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
          <ul class="list">
            <li class="item">
              <p class="name space-24">
                <i class="fab fa-facebook-square"></i>facebook.com</p>
              <p class="num">48,836</p>
              <p class="rate green">
                  <span>
                    <i class="fas fa-arrow-up"></i>20%
                  </span>
              </p>
            </li>
            <li class="item">
              <p class="name space-24">
                <i class="fab fa-google"></i>google.com</p>
              <p class="num">23,582</p>
              <p class="rate green">
                  <span>
                    <i class="fas fa-arrow-up"></i>12%
                  </span>
              </p>
            </li>
            <li class="item">
              <p class="name space-24">
                <i class="fab fa-aws"></i>Amazon.com</p>
              <p class="num">2,489</p>
              <p class="rate red">
                  <span>
                    <i class="fas fa-arrow-down"></i>15%
                  </span>
              </p>
            </li>
            <li class="item">
              <p class="name space-24">
                <i class="fab fa-wordpress"></i>Wordpress.com</p>
              <p class="num">1,057</p>
              <p class="rate red">
                  <span>
                    <i class="fas fa-arrow-down"></i>30%
                  </span>
              </p>
            </li>
          </ul>
        </div>
        <div class="space"></div>
        <div class="card card-two-column">
          <div class="h3-title">
            <h3>Latest Orders</h3>
          </div>
          <ul class="list">
            <li class="item">
              <div class="pic space-8">
                <img src="https://cdn.shopify.com/s/files/1/1755/5355/products/mock-10-2122-14213D-nh-ns-111802514472174936291489614087-3_1800x.png?v=1489614156" />
              </div>
              <div class="detail">
                <h4 class="space-8">Vintage T-shirt</h4>
                <div class="detail-text space-8">
                  <i class="fas fa-clock"></i>
                  2018/6/13  13:42
                </div>
                <div class="detail-text ">
                  <i class="fas fa-male"></i>
                  Belle Willis
                </div>
              </div>
              <div class="total">
                <p class="space-2">Total</p>
                <p class="num space-2">3,200</p>
              </div>
            </li>
            <li class="item">
              <div class="pic space-8">
                <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M01-59-CF-rBVaI1nAqgmAUjJcAALLBxCz1lk564.jpg/afs-jeep-coat-denim-jackets-cowboy-coat-brand.jpg" />
              </div>
              <div class="detail">
                <h4 class="space-8">Cowboy Jacket</h4>
                <div class="detail-text space-8">
                  <i class="fas fa-clock"></i>
                  2018/6/13  10:45
                </div>
                <div class="detail-text ">
                  <i class="fas fa-male"></i>
                  Adrian Cummings
                </div>
              </div>
              <div class="total">
                <p class="space-2">Total</p>
                <p class="num space-2">2,800</p>
              </div>
            </li>
            <li class="item">
              <div class="pic space-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOFcgob2BsF0_rUi6fHjztcYxOdZfj1n2nY894YThDNMs-Ijc" />
              </div>
              <div class="detail">
                <h4 class="space-8">Coach Coat</h4>
                <div class="detail-text space-8">
                  <i class="fas fa-clock"></i>
                  2018/6/13  8:26
                </div>
                <div class="detail-text ">
                  <i class="fas fa-male"></i>
                  Lura Holland
                </div>
              </div>
              <div class="total">
                <p class="space-2">Total</p>
                <p class="num space-2">1,600</p>
              </div>
            </li>
          </ul>
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
