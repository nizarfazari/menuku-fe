

export default function DetailMitraLayout({ children }: { children: React.ReactNode }) {
    return (
        <nav className="container max-w-md mx-auto">
            <img className="rounded-b-lg shadow-md" src="https://source.unsplash.com/600x400" alt="Hero" />
            {children}
        </nav>
    )
}