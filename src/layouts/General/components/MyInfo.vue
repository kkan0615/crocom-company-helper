<template>
  <t-dropdown-menu>
    <template
      #activator
    >
      <div
        class="text-center sm:w-16"
      >
        <t-material-icon>
          person
        </t-material-icon>
      </div>
    </template>
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
