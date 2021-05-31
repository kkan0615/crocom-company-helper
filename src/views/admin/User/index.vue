<template>
  <div>
    <filter-user-admin />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { AdminViewActionTypes } from '@/store/modules/views/admin/actions'
import FilterUserAdmin from '@/views/admin/User/components/Filter.vue'

export default defineComponent({
  name: 'UserAdmin',
  components: { FilterUserAdmin },
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch(AdminViewActionTypes.LOAD_USERS)
    })

    return
  }
})
</script>
