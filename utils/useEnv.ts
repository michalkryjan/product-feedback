type ProjectEnv = {
  NODE_ENV: 'development' | 'production'
  FIREBASE_API_KEY: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_APP_ID: string
}

export function useEnv (): NodeJS.Process['env'] & NodeJS.ProcessEnv & ProjectEnv {
  return process.env as NodeJS.Process['env'] & NodeJS.ProcessEnv & ProjectEnv
}