<script setup lang="ts">
const dataSample = {
  id: 'test',
  title: 'Add a dark theme option',
  category: 'Feature',
  status: 'Planned',
  details: 'It would help people with light sensitivities and who prefer dark mode.'
}
</script>

<template>
  <layout-page-inner
    width-type="s"
    vertical-padding-type="m">
    <form-feedback-edit :data="dataSample" />
  </layout-page-inner>
</template>