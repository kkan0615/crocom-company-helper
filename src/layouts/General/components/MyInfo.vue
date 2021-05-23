<template>
  <t-dropdown-menu>
    <template
      #activator
    >
      <t-material-icon>
        person
      </t-material-icon>
    </template>
    <div class="px-4 py-3">
      <p class="text-sm leading-5">
        Signed in as
      </p>
      <p class="text-sm font-medium leading-5 text-gray-900 truncate">
        tom@example.com
      </p>
    </div>
    <div class="py-1">
      <a
        href="javascript:void(0)"
        tabindex="0"
        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
      >Account settings</a>
      <a
        href="javascript:void(0)"
        tabindex="1"
        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
      >Support</a>
      <span
        role="menuitem"
        tabindex="-1"
        class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
        aria-disabled="true"
      >New feature (soon)</span>
      <a
        href="javascript:void(0)"
        tabindex="2"
        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
      >License</a>
    </div>
    <div class="py-1">
      <a
        href="javascript:void(0)"
        tabindex="3"
        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
      >Sign out</a>
    </div>
  </t-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TDropdownMenu from '@/components/tailwind/dropMenu/Down/index.vue'

export default defineComponent({
  name: 'MyInfoGeneralLayout',
  components: {
    TDropdownMenu,
    TMaterialIcon
  },
  setup () {
    return
  }
})
</script>
