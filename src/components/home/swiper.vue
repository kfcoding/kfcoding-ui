<template>
  <div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
                <div class="section-title text-center">
                    <h2 data-animate="fadeInUp" data-delay=".1">Our Client’s Words</h2>
                    <p data-animate="fadeInUp" data-delay=".2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
            </div>
        </div>
        <div class="review-slider-wrap">
            <div class="swiper-container review-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-dark bg-rotate single-review">
                        <div class="review-info"> <i class="fas fa-quote-left float-left"></i>
                            <h4>Dale J. Hudson</h4>  <span>Melbourne, Australia</span>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="swiper-slide bg-dark bg-rotate single-review">
                        <div class="review-info"> <i class="fas fa-quote-left float-left"></i>
                            <h4>Dale J. Hudson</h4>  <span>Melbourne, Australia</span>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="swiper-slide bg-dark bg-rotate single-review">
                        <div class="review-info"> <i class="fas fa-quote-left float-left"></i>
                            <h4>Dale J. Hudson</h4>  <span>Melbourne, Australia</span>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="swiper-slide bg-dark bg-rotate single-review">
                        <div class="review-info"> <i class="fas fa-quote-left float-left"></i>
                            <h4>Dale J. Hudson</h4>  <span>Melbourne, Australia</span>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="swiper-slide bg-dark bg-rotate single-review">
                        <div class="review-info"> <i class="fas fa-quote-left float-left"></i>
                            <h4>Dale J. Hudson</h4>  <span>Melbourne, Australia</span>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination review-pagination"></div>
    </div>
  </div>
</template>
<script>

import Swiper from 'swiper'

export default {
  name: 'swiper',
  // props: ['swiper'],
  data() {
    return {
      mySwiper: null
    }
  },
  methods: {
    _initSwiper() {
      this.mySwiper = new Swiper('.review-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.review-pagination',
          clickable: true
        },
        breakpoints: {
          575: {
            slidesPerView: 1
          },
          991: {
            slidesPerView: 2
          }
        }
      })
    },
    _updateSwiper() {
      this.$nextTick(() => {
        this.mySwiper.update(true)
      })
    },
    swiperUpdate() {
      if (this.mySwiper) {
        this._updateSwiper()
      } else {
        this._initSwiper()
      }
    }
  },

  watch: {
    swiper() {
      this.swiperUpdate()
    }
  },
  mounted() {
    this.swiperUpdate()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
