<template>
  <div
    class="flex w-full pr-2"
  >
    <div
      class="py-1 px-2 hover:text-primary-500 gap-x-4 flex items-center w-full"
      :class="{
        'bg-gray-400': active,
        'rounded-r-2xl': active,
        'text-white': active,
      }"
    >
      <div>
        <t-material-icon
          class="cursor-pointer"
          @click="onClickIcon"
        >
          <slot />
        </t-material-icon>
      </div>
      <div
        class="text-sm"
      >
        <slot
          name="title"
        >
          <span>
            {{ value.name }}
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { getParentRoute, getRouteInfo } from '@/utils/router'

export default defineComponent({
  name: 'NavigatorMenuAdminLayout',
  components: { TMaterialIcon },
  props: {
    value: {
      type: Object,
      required: false,
      default: () => {
        return {} as RouteRecordRaw
      },
    }
  },
  setup (props) {
    const route = useRoute()
    const { emit } = useContext()

    const active = computed(() => {
      /* value */
      const value = props.value as RouteRecordRaw
      /* route information of value */
      const routeInfo = getRouteInfo(value.name as string)
      if (routeInfo && !routeInfo.children)
        return route.name === value.name
      else if (routeInfo && routeInfo.children)
        return routeInfo.children.findIndex(child => child.name === route.name) >= 0

      return false
    })

    const onClickIcon = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      active,
      onClickIcon,
    }
  }
})
</script>
