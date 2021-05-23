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
import { defineComponent } from 'vue'
import NavigatorGeneralLayout from '@/layouts/General/components/Navigator.vue'
import AppbarGeneralLayout from '@/layouts/General/components/Appbar.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: { AppbarGeneralLayout, NavigatorGeneralLayout },
  setup () {
    return
  }
})
</script>
