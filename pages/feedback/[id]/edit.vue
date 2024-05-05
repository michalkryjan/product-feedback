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
  <layout-inner
    width-type="s"
    class="pt-90">
    <form-feedback-edit :data="dataSample" />
  </layout-inner>
</template>