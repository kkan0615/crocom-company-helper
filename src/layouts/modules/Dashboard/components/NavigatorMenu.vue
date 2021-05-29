<template>
  <menu-list
    :active="isActive"
    @click="onClickMenu"
  >
    <t-list>
      <t-list-item>
        <t-list-item-avatar>
          <t-material-icon>
            {{ routeProp.meta.icon }}
          </t-material-icon>
        </t-list-item-avatar>
        <t-list-item-content>
          <t-list-item-content-tittle>
            {{ routeProp.name }}
          </t-list-item-content-tittle>
        </t-list-item-content>
      </t-list-item>
    </t-list>
  </menu-list>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import MenuList from '@/components/list/Menu/index.vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'

export default defineComponent({
  name: 'NavigatorMenuDashboardLayout',
  components: { TListItemContentTittle, TListItemContent, TMaterialIcon, TListItemAvatar, TListItem, TList, MenuList },
  props: {
    value: {
      type: Object,
      default: () => {},
      required: false,
    }
  },
  setup (props) {
    const route =  useRoute()
    const router = useRouter()

    const isActive = computed(() => {
      const routeProps = props.value as RouteRecordRaw
      if (!route.name)
        return ''

      return routeProps.name === route.name
    })

    const onClickMenu = async () => {
      const routeProps = props.value as RouteRecordRaw
      await router.push({ name: routeProps.name })
    }

    return {
      routeProp: (props.value as RouteRecordRaw),
      isActive,
      onClickMenu,
    }
  }
})
</script>
