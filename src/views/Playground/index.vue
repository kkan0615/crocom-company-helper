<template>
  <div>
    <t-list>
      <t-list-item>
        <t-list-item-avatar />
        <t-list-item-content>
          <t-list-item-content-tittle>
            title
          </t-list-item-content-tittle>
          <t-list-item-content-sub-tittle>
            sub
          </t-list-item-content-sub-tittle>
        </t-list-item-content>
      </t-list-item>
    </t-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TList from '@/components/tailwind/List/index.vue'
import TListItem from '@/components/tailwind/List/components/item.vue'
import TListItemAvatar from '@/components/tailwind/List/components/itemAvatar.vue'
import TListItemContent from '@/components/tailwind/List/components/itemContent.vue'
import TListItemContentTittle from '@/components/tailwind/List/components/itemContentTittle.vue'
import TListItemContentSubTittle from '@/components/tailwind/List/components/itemContentSubTitle.vue'

export default defineComponent({
  name: 'Playground',
  components: { TListItemContentSubTittle, TListItemContentTittle, TListItemContent, TListItemAvatar, TListItem, TList },
  setup () {

    return {
    }
  }
})
</script>
