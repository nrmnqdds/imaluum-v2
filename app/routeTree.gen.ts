/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeImport } from './routes/_home'
import { Route as IndexImport } from './routes/index'
import { Route as HomeDashboardImport } from './routes/_home/dashboard'

// Create/Update Routes

const HomeRoute = HomeImport.update({
  id: '/_home',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const HomeDashboardRoute = HomeDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => HomeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_home': {
      id: '/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/_home/dashboard': {
      id: '/_home/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof HomeDashboardImport
      parentRoute: typeof HomeImport
    }
  }
}

// Create and export the route tree

interface HomeRouteChildren {
  HomeDashboardRoute: typeof HomeDashboardRoute
}

const HomeRouteChildren: HomeRouteChildren = {
  HomeDashboardRoute: HomeDashboardRoute,
}

const HomeRouteWithChildren = HomeRoute._addFileChildren(HomeRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof HomeRouteWithChildren
  '/dashboard': typeof HomeDashboardRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof HomeRouteWithChildren
  '/dashboard': typeof HomeDashboardRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_home': typeof HomeRouteWithChildren
  '/_home/dashboard': typeof HomeDashboardRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/dashboard'
  id: '__root__' | '/' | '/_home' | '/_home/dashboard'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeRoute: typeof HomeRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeRoute: HomeRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_home"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_home": {
      "filePath": "_home.tsx",
      "children": [
        "/_home/dashboard"
      ]
    },
    "/_home/dashboard": {
      "filePath": "_home/dashboard.tsx",
      "parent": "/_home"
    }
  }
}
ROUTE_MANIFEST_END */
