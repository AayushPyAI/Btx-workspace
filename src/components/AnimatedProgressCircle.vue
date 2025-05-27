<template>
  <div class="lead-score-container">
    <!-- Background image ring -->
    <div class="bg-ring-image"></div>

    <!-- Progress Ring in SVG -->
    <svg viewBox="0 0 200 200" class="lead-score-ring">
      <defs>
        <linearGradient :id="headingName ?'gradient-1':'gradient-2'" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" :stop-color="headingName  ? '#CF3393' : '#5CB1E2'" />
          <stop offset="100%" :stop-color="headingName ? '#FF94D6' : '#B7E4FF'" />
        </linearGradient>
      </defs>
  
      <!-- Only progress ring now -->
      <circle
        :class="headingName?'progress-ring-1':'progress-ring-2'"
        cx="100"
        cy="100"
        r="81.5"
        stroke-width="40"
        fill="none"
        :style="{
          strokeDasharray: circumference,
          strokeDashoffset: progressOffset
        }"
      />
    </svg>

    <!-- Score in center -->
    <div class="score-text text-primary">
      <span class="score">{{ animatedScore }}</span>
      <div class="label">{{ !headingName?'Lead Score':'Behavior Score'}}</div>
       
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'AnimatedProgressCircle',
  props: {
    score: {
      type: Number,
      default: 92
    },
    duration: {
      type: Number,
      default: 2
    },
    headingName: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const radius = 78
    const circumference = 2 * Math.PI * radius
    return {
      radius,
      circumference,
      progressOffset: circumference,
      animatedScore: 0
    }
  },
  mounted() {
    // Animate ring offset
    gsap.to(this.$data, {
      progressOffset: this.circumference - (this.score / 100) * this.circumference,
      duration: this.duration,
      ease: 'power2.out'
    })

    // Animate number
    gsap.to(this.$data, {
      animatedScore: this.score,
      duration: this.duration,
      ease: 'power2.out',
      onUpdate: () => {
        this.animatedScore = Math.round(this.animatedScore)
      }
    })

   console.log(this.headingName);
  }
}
</script>

<style scoped>
.lead-score-container {
  position: relative;
  width: 220px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.bg-ring-image {
  position: absolute;
  width: 181px;
  height: 181px;
  background-image: url('../assets/backImage.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 1;
}

.lead-score-ring {
  position: absolute;
  width: 185px;
  height: 180px;
  transform: rotate(-90deg);
  z-index: 2;
}

.progress-ring-1 {
  stroke: url(#gradient-1);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s;
}

.progress-ring-2 {
  stroke: url(#gradient-2);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s;
}

.score-text {
  position: absolute;
  z-index: 3;
  text-align: center;
}

.score {
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
}

.label {
  font-size: 9px;
  opacity: 1;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
   text-align: center;
   font-weight:600;
}
</style>
