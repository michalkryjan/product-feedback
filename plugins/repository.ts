import createRepository from '~/repository/Main'

export default defineNuxtPlugin((nuxtApp) => {
  const $db = useFirestore()
  const repository = createRepository($db)

  nuxtApp.provide('repo', repository)
})