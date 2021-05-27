<template>
  <t-drawer-navigator-layout>
    <div
      v-for="route in adminRoutes"
      :key="route.name"
      class="w-full"
    >
      <navigator-menu-admin-layout
        v-if="!route.meta.hidden"
        :value="route"
        @click="onClickMenu(route)"
      >
        {{ route.meta.icon }}
      </navigator-menu-admin-layout>
    </div>
    <navigator-menu-admin-layout
      class="mt-auto"
      @click="onClickExitButton"
    >
      logout
      <template
        #title
      >
        Exit
      </template>
    </navigator-menu-admin-layout>
  </t-drawer-navigator-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import NavigatorMenuGeneralLayout from '@/layouts/General/components/NavigatorMenu.vue'
import useStore from '@/store'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { getParentRoute } from '@/utils/router'
import TDrawerNavigatorLayout from '@/components/tailwind/layouts/navigators/Drawer/index.vue'
import NavigatorMenuAdminLayout from '@/layouts/Admin/components/NavigatorMenu.vue'

export default defineComponent({
  name: 'NavigatorAdminLayout',
  components: { NavigatorMenuAdminLayout, TDrawerNavigatorLayout },
  setup () {
    const store = useStore()
    const route =  useRoute()
    const router = useRouter()

    const adminRoutes = computed(() => {
      return store.state.menu.adminRoutes
    })
    const activingName = computed(() => {
      if (!route.name)
        return ''

      const result = getParentRoute(route.name as string)
      return result ? result.name : ''
    })

    const onClickMenu = async (clickedRoute: RouteRecordRaw) => {
      await router.push({ name: clickedRoute.name })
    }

    const onClickExitButton = async () => {
      await router.push({ name: 'Home' })
    }

    return {
      adminRoutes,
      activingName,
      onClickMenu,
      onClickExitButton,
    }
  }
})
</script>
