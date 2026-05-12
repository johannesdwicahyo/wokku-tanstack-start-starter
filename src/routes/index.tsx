import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Wokku TanStack Start starter — it works.</h3>
      <p>
        Deploy this app to Wokku with one click at{' '}
        <a href="https://wokku.cloud">wokku.cloud</a>.
      </p>
    </div>
  )
}
