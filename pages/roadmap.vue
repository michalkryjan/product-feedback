<script setup lang="ts">
</script>

<template>
  <layout-page-inner
    width-type="l"
    vertical-padding-type="s">
    <ui-header-subpage
      page-title="Roadmap"
      tag="header"
      type="card"
      margin-bottom-type="m">
      <template #button>
        <base-button
          text="Add feedback"
          href="/feedback/create"
          size="s2"
          theme="purple"
          label-color="white">
          <template #icon-left>
            <base-icon name="plus" />
          </template>
        </base-button>
      </template>
    </ui-header-subpage>

    <block-feedback-list-roadmap />
  </layout-page-inner>
</template>