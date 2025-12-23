export default function Layout({ children }) {
  return (
    <>
      <header className="py-4 px-6">
        <div className="max-w-6xl mx-auto">/* Placeholder header - add logo/navigation */</div>
      </header>
      {children}
      <footer className="border-t border-grigio mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-grigio">
          © {new Date().getFullYear()} Aura — Indirizzo, Città
        </div>
      </footer>
    </>
  )
}
