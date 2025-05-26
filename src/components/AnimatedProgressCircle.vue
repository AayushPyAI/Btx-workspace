<template>
  <div class="lead-score-container">
    <svg viewBox="0 0 200 200" class="lead-score-ring">
      <!-- Gradient for progress -->
      <defs>
        <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3db2ff" />
          <stop offset="100%" stop-color="#00c9ff" />
        </linearGradient>
      </defs>

      <!-- Base Ring -->
      <circle
        class="bg-ring"
        cx="100"
        cy="100"
        r="90"
        stroke-width="36"
        fill="none"
      />

      <!-- Progress Ring -->
      <circle
        class="progress-ring"
        cx="100"
        cy="100"
        r="90"
        stroke-width="36"
        fill="none"
        :style="{
          strokeDasharray: circumference,
          strokeDashoffset: progressOffset
        }"
      />

      <!-- Dashed Segment (Remaining arc) -->
      <circle
        class="dashed-ring"
        cx="100"
        cy="100"
        r="90"
        stroke-width="36"
        fill="none"
        :style="{
          strokeDasharray: dashPattern,
          strokeDashoffset: dashedOffset
        }"
      />
    </svg>

    <!-- Score in center -->
    <div class="score-text">
      <span class="score">{{ animatedScore }}</span>
      <div class="label">Lead Score</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
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
    }
  },
  setup(props) {
    const radius = 90
    const circumference = 2 * Math.PI * radius

    const progressOffset = ref(circumference)
    const animatedScore = ref(0)

    const filledRatio = props.score / 100
    const emptyRatio = 1 - filledRatio

    // Dashed Ring Pattern
    const dashPattern = '2,6' // dot length and gap

    // Compute dashed ring offset so it starts exactly after the progress
    const dashedOffset = computed(() => {
      return -circumference * filledRatio
    })

    onMounted(() => {
      // Animate filled ring
      gsap.to(progressOffset, {
        value: circumference - (props.score / 100) * circumference,
        duration: props.duration,
        ease: 'power2.out'
      })

      // Animate number count
      gsap.to(animatedScore, {
        value: props.score,
        duration: props.duration,
        ease: 'power2.out',
        onUpdate: () => {
          animatedScore.value = Math.round(animatedScore.value)
        }
      })
    })

    return {
      circumference,
      progressOffset,
      dashPattern,
      dashedOffset,
      animatedScore
    }
  }
}
</script>

<style scoped>
.lead-score-container {
  width: 200px;
  height: 200px;
  position: relative;
}

.lead-score-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.bg-ring {
  stroke: #d4f0ff2f;
}

.progress-ring {
  stroke: url(#gradient);
  transition: stroke-dashoffset 0.3s;
}

.dashed-ring {
  stroke: rgba(255, 255, 255, 0.3); /* Light lines */
  stroke-linecap: round;
  stroke-dasharray: 2, 6;
  pointer-events: none;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
}

.score {
  font-size: 32px;
  font-weight: bold;
}

.label {
  font-size: 14px;
  opacity: 0.7;
}
</style>
