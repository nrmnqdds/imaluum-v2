import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_home/dashboard')({
  component: () => <div>Hello /_home/dashboard!</div>,
})
