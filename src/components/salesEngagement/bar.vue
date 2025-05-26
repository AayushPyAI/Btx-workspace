<template>
  <svg width="230" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
    <!-- Static gray background -->
    <path
      d="M153.238 301L152.747 243.743C153.238 243.743 153.728 243.743 154.218 243.743L155.688 301C154.904 301 154.022 301 153.238 301Z
      ... (rest of background path) ..."
      fill="#BCB3DF"
    />
    <!-- OUTER ARC: Animated stroke, not fill -->
    <path
      ref="arc"
      :stroke="`url(#paint0_linear_450_2669)`"
      stroke-width="32"
      stroke-linecap="round"
      fill="none"
      :style="arcStyle"
      d="M0 153C0 98.4339 28.5786 50.5782 71.4545 23.5239C74.724 21.4608 79.0081 22.6492 80.9191 26.0099L104.645 67.7353C106.556 71.096 105.363 75.3479 102.158 77.5108C77.8782 93.8994 62 121.612 62 153C62 203.258 102.742 244 153 244C203.258 244 244 203.258 244 153C244 105.097 206.987 65.8395 160 62.2652C156.145 61.972 153 58.866 153 55V7C153 3.13401 156.141 -0.0165722 160.003 0.157406C241.252 3.8175 306 70.8474 306 153C306 237.5 237.5 306 153 306C68.5004 306 0 237.5 0 153Z"
    />
    <!-- Center text and other elements ... -->
    <text x="50%" y="48%" text-anchor="middle" font-size="48" fill="#1C0A6B" dominant-baseline="middle">
      92
    </text>
    <text x="50%" y="60%" text-anchor="middle" font-size="24" fill="#1C0A6B" dominant-baseline="middle">
      Lead Score
    </text>
    <defs>
      <linearGradient id="paint0_linear_450_2669" x1="306" y1="153" x2="0" y2="153" gradientUnits="userSpaceOnUse">
        <stop offset="0.210023" stop-color="#5CB1E2" />
        <stop offset="0.546759" stop-color="#96D8FF" />
        <stop offset="0.699137" stop-color="#B7E4FF" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      arcStyle: {}
    }
  },
  mounted() {
    const arc = this.$refs.arc;
    const length = arc.getTotalLength();
    // Set initial state: arc hidden
    this.arcStyle = {
      strokeDasharray: length,
      strokeDashoffset: length,
      transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)'
    };
    // Animate to reveal arc
    setTimeout(() => {
      this.arcStyle = {
        ...this.arcStyle,
        strokeDashoffset: 0
      };
    }, 100);
  }
}
</script>
