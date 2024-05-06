import createRepository from '~/repository/Firebase'

export default defineNuxtPlugin((nuxtApp) => {
  const $db = useFirestore()
  const repository = createRepository($db)

  nuxtApp.provide('repo', repository)
})