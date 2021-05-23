<template>
  <t-small-navigator-layout>
    <!--    <navigator-menu-general-layout-->
    <!--      :active="true"-->
    <!--    >-->
    <!--      home-->
    <!--    </navigator-menu-general-layout>-->
    <!--    <navigator-menu-general-layout>-->
    <!--      dashboard-->
    <!--    </navigator-menu-general-layout>-->
    <div
      v-for="route in generalRoutes"
      :key="route.name"
      class="w-full"
    >
      <navigator-menu-general-layout
        v-if="!route.meta.hidden"
        :value="route"
        @click="onClickMenu(route)"
      >
        {{ route.meta.icon }}
      </navigator-menu-general-layout>
    </div>
  </t-small-navigator-layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import TSmallNavigatorLayout from '@/components/tailwind/layouts/navigators/Small/index.vue'
import NavigatorMenuGeneralLayout from '@/layouts/General/components/NavigatorMenu.vue'
import useStore from '@/store'
import { MenuActionTypes } from '@/store/modules/menu/actions'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { getParentRoute, getRouteInfo } from '@/utils/router'

export default defineComponent({
  name: 'NavigatorGeneralLayout',
  components: { NavigatorMenuGeneralLayout, TSmallNavigatorLayout },
  setup () {
    const store = useStore()
    const route =  useRoute()
    const router = useRouter()

    const generalRoutes = computed(() => store ? store.state.menu.generalRoutes : [])
    const activingName = computed(() => {
      if (!route.name)
        return ''

      // const routeInfo = getRouteInfo(route.name as string)
      // if (routeInfo && !routeInfo.children)
      //   return route.name

      const result = getParentRoute(route.name as string)
      return result ? result.name : ''
    })

    onMounted(async () => {
      await store.dispatch(MenuActionTypes.LOAD_GENERAL_ROUTES)
    })

    const onClickMenu = async (clickedRoute: RouteRecordRaw) => {
      await router.push({ name: clickedRoute.name })
    }

    return {
      generalRoutes,
      activingName,
      onClickMenu,
    }
  }
})
</script>
