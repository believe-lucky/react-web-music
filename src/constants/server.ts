const LOCAL_ORIGIN = 'http://localhost'
const REMOTE_ORIGIN = 'https://music-node-liart.vercel.app'

export const PORT = 8080
const __LOCALHOST__ = true
export const SERVER = __LOCALHOST__ ? `${LOCAL_ORIGIN}:${PORT}/api` : `${REMOTE_ORIGIN}`
export const GRAPHQL_SERVER = __LOCALHOST__ ? `${LOCAL_ORIGIN}:${PORT}/graphql` : `${REMOTE_ORIGIN}/graphql`
