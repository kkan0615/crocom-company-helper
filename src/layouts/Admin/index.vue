<template>
  <main
    class="h-full w-full"
  >
    <div
      class="sm:h-full sm:flex"
    >
      <navigator-admin-layout
        class="sm:visible invisible"
      />
      <div
        class="flex-grow flex flex-col sm:h-full"
      >
        <appbar-admin-layout
          class="flex-shrink flex-grow-0"
        />
        <div
          class="flex-grow p-4"
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
import NavigatorAdminLayout from '@/layouts/Admin/components/Navigator.vue'
import AppbarAdminLayout from '@/layouts/Admin/components/Appbar.vue'
import { MenuActionTypes } from '@/store/modules/menu/actions'
import useStore from '@/store'

export default defineComponent({
  name: 'GeneralLayout',
  components: { AppbarAdminLayout, NavigatorAdminLayout },
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch(MenuActionTypes.LOAD_ADMIN_ROUTES)
    })

    return
  }
})
</script>
