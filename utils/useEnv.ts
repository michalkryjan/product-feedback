type ProjectEnv = {
  MODE: 'development' | 'production'
  FIREBASE_API_KEY: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_APP_ID: string
  STORAGE_BUCKET_ID: string
  APP_CHECK_KEY: string
}

export function useEnv (): NodeJS.Process['env'] & NodeJS.ProcessEnv & ProjectEnv {
  return process.env as NodeJS.Process['env'] & NodeJS.ProcessEnv & ProjectEnv
}