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
  <div>
    <nuxt-layout name="form">
      <form-feedback-edit :data="dataSample" />
    </nuxt-layout>
  </div>
</template>