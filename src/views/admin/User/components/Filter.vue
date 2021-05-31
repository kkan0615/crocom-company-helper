<template>
  <div
    class="flex"
  >
    <div
      class="flex gap-x-2"
    >
      <t-text-input
        label="name"
      />
      <t-select-input
        item-text="name"
        item-value="id"
        :items="[]"
      />
    </div>
    <div
      class="ml-auto"
    >
      <t-button
        class="w-32 h-16"
      >
        Search
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TTextInput from '@/components/tailwind/input/Text/index.vue'
import TSelectInput from '@/components/tailwind/input/Select/index.vue'

export default defineComponent({
  name: 'FilterUserAdmin',
  components: { TSelectInput, TTextInput, TButton },
  setup () {
    return
  }
})
</script>
