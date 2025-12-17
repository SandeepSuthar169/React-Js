import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/making-code')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/making-code"!</div>
}
