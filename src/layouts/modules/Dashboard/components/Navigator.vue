<template>
  <t-small-navigator-layout
    :width="52"
  >
    <div
      v-for="route in generalRoutes"
      :key="route.name"
      class="w-full"
    >
      <navigator-menu-dashboard-layout
        :value="route"
      />
    </div>
  </t-small-navigator-layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { MenuActionTypes } from '@/store/modules/menu/actions'
import TSmallNavigatorLayout from '@/components/tailwind/layouts/navigators/Small/index.vue'
import NavigatorMenuDashboardLayout from '@/layouts/modules/Dashboard/components/NavigatorMenu.vue'

export default defineComponent({
  name: 'NavigatorDashboardLayout',
  components: { NavigatorMenuDashboardLayout, TSmallNavigatorLayout },
  setup () {
    const store = useStore()

    const generalRoutes = computed(() => store ? store.state.menu.dashboardRoutes : [])

    onMounted(async () => {
      await store.dispatch(MenuActionTypes.LOAD_GENERAL_ROUTES)
    })

    return {
      generalRoutes,
    }
  }
})
</script>
