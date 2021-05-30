<template>
  <div>
    UserAdmin
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { AdminViewActionTypes } from '@/store/modules/views/admin/actions'

export default defineComponent({
  name: 'UserAdmin',
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch(AdminViewActionTypes.LOAD_USERS)
    })

    return
  }
})
</script>
