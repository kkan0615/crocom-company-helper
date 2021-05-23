import 'vue-router'

declare module 'vue-router' {
  export interface RouteMeta {
    icon?: string
    hidden?: boolean
    requiredLogin?: boolean
  }
}
