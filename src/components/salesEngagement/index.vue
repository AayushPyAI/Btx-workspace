<template>
  <div>
    <SalesNavbar />
    <TopBar />
    <div class="flex h-full w-full bg-gray-50">
      <!-- Left Container -->
      <div class="w-[28%] min-w-[310px] border-gray-200   overflow-y-auto" :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
        <SalesFiltercard />
      </div>

      <!-- Right Container -->
      <div class="w-[72%]  overflow-y-auto" :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
        <RightSalesPage />
        <div class="flex gap-3 w-full" :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
          <LeadInfoCard />
          <CampaignCard />
        </div>
        <div class="w-full">
          <Scoring />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalesNavbar from '../salesEngagement/SalesNavbar.vue'
import TopBar from '../salesEngagement/TopBar.vue'
import SalesFiltercard from '../salesEngagement/SalesFiltercard.vue'
import RightSalesPage from '../salesEngagement/RightSalesPage.vue'
import LeadInfoCard from '../salesEngagement/LeadInfoCard.vue'
import CampaignCard from '../salesEngagement/CampaignCard.vue'
import Scoring from '../salesEngagement/Scoring.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SalesPage',
  components: {
    SalesNavbar,
    TopBar,
    SalesFiltercard,
    RightSalesPage,
    LeadInfoCard,
    CampaignCard,
    Scoring,
  },
  data() {
    return {

    }
  },      computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>
