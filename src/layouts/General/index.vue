<template>
  <main
    class="h-full w-full"
  >
    <div
      class="sm:h-full sm:flex"
    >
      <navigator-general-layout
        class="sm:visible invisible"
      />
      <div
        class="flex-grow flex flex-col sm:h-full"
      >
        <appbar-general-layout
          class="flex-shrink flex-grow-0"
        />
        <div
          class="flex-grow"
        >
          <router-view
            v-slot="{ Component }"
          >
            <transition
              name="fade"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import NavigatorGeneralLayout from '@/layouts/General/components/Navigator.vue'
import AppbarGeneralLayout from '@/layouts/General/components/Appbar.vue'
import { MenuActionTypes } from '@/store/modules/menu/actions'
import useStore from '@/store'

export default defineComponent({
  name: 'GeneralLayout',
  components: { AppbarGeneralLayout, NavigatorGeneralLayout },
  setup () {
    const store = useStore()

    onMounted(async () => {
      if (store)
        await store.dispatch(MenuActionTypes.LOAD_GENERAL_ROUTES)
    })

    return
  }
})
</script>
