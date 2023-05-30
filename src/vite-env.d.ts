/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEMPLATE_IP_KEY: string
  readonly VITE_SERVICE_KEY: string
  readonly VITE_PUBLIC_KEY: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
