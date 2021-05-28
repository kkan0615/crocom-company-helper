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
        <t-list>
          <t-list-item>
            <t-list-item-avatar>
              <t-material-icon>
                {{ route.meta.icon }}
              </t-material-icon>
            </t-list-item-avatar>
            <t-list-item-content>
              <t-list-item-content-tittle>
                {{ route.name }}
              </t-list-item-content-tittle>
            </t-list-item-content>
          </t-list-item>
        </t-list>
      </navigator-menu-admin-layout>
    </div>
    <t-list
      class="mt-auto px-2"
      @click="onClickExitButton"
    >
      <t-list-item>
        <t-list-item-avatar>
          <t-material-icon>
            logout
          </t-material-icon>
        </t-list-item-avatar>
        <t-list-item-content>
          <t-list-item-content-tittle>
            Exit
          </t-list-item-content-tittle>
        </t-list-item-content>
      </t-list-item>
    </t-list>
  </t-drawer-navigator-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/store'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { getParentRoute } from '@/utils/router'
import TDrawerNavigatorLayout from '@/components/tailwind/layouts/navigators/Drawer/index.vue'
import NavigatorMenuAdminLayout from '@/layouts/Admin/components/NavigatorMenu.vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'NavigatorAdminLayout',
  components: { TMaterialIcon, TListItemContentTittle, TListItemAvatar, TListItemContent, TListItem, TList, NavigatorMenuAdminLayout, TDrawerNavigatorLayout },
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
