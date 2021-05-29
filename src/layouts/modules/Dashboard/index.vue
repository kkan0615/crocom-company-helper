<template>
  <div
    class="flex h-full"
  >
    <navigator-dashboard-layout />
    <router-view
      class="p-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import NavigatorDashboardLayout from '@/layouts/modules/Dashboard/components/Navigator.vue'
import useStore from '@/store'
import { MenuActionTypes } from '@/store/modules/menu/actions'

export default defineComponent({
  name: 'DashboardLayout',
  components: { NavigatorDashboardLayout },
  setup () {
    const store = useStore()

    onMounted(async () => {
      if (store)
        await store.dispatch(MenuActionTypes.LOAD_DASHBOARD_ROUTES)
    })

    return
  }
})
</script>
