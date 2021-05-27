<template>
  <t-appbar
    class="border-gray-300 border-b-2"
  >
    <t-button
      text
    >
      <t-material-icon>
        menu
      </t-material-icon>
    </t-button>
    <my-info-general-layout
      class="ml-auto mr-2"
    />
  </t-appbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TAppbar from '@/components/tailwind/layouts/Appbar/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import MyInfoGeneralLayout from '@/layouts/General/components/MyInfo.vue'

export default defineComponent({
  name: 'AppbarAdminLayout',
  components: { MyInfoGeneralLayout, TMaterialIcon, TButton, TAppbar },
  setup () {
    return
  }
})
</script>
