const getEnv = () => {
  const TARGET_KEY = '--NODE_ENV='

  const [envParam] = process.argv.filter((param) => {
    return param.startsWith(TARGET_KEY)
  })

  if (envParam) {
    const env = envParam.replace(TARGET_KEY, '')

    if (env) return env
  }
}

interface ENV extends String {
  env: string
  isDev: boolean
  _isDev: boolean
  isProd: boolean
  _isProd: boolean
}

const env = getEnv() ?? ''
// @ts-ignore
const envInstance: ENV = new String(env)

process.env.NODE_ENV = env
envInstance.env = env
envInstance._isDev = env === 'dev'
envInstance.isDev = env === 'development'
envInstance._isProd = env === 'prod'
envInstance.isProd = env === 'production'

export default envInstance
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
    }
  }
}
