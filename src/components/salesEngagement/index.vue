<template>
  <div>
    <SalesNavbar />
    <TopBar />
    <div class="flex h-full w-full bg-gray-50">
      <!-- Left Container -->
      <div class="w-[28%] min-w-[310px] border-gray-200 bg-white overflow-y-auto">
        <SalesFiltercard />
      </div>

      <!-- Right Container -->
      <div class="w-[72%] bg-[#F8F6FC] overflow-y-auto">
        <RightSalesPage />
        <div class="flex gap-3 w-full">
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
  }
}
</script>
