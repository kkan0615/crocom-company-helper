<template>
  <t-appbar>
    <t-button
      text
    >
      <t-material-icon>
        menu
      </t-material-icon>
    </t-button>
    <user-dropdown
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
import UserDropdown from '@/components/dropdowns/User/index.vue'

export default defineComponent({
  name: 'AppbarGeneralLayout',
  components: { UserDropdown, MyInfoGeneralLayout, TMaterialIcon, TButton, TAppbar },
  setup () {
    return
  }
})
</script>
