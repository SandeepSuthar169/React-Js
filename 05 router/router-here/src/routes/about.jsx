import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  defaultPreload: "Intent"  // imp 
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
