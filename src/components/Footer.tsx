export default function Footer() {
    return (
      <footer className="mt-24 text-center text-muted-foreground text-sm py-8 border-t border-border space-y-2">
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/shritej-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#309898] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Shritej-Reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4631E] transition-colors"
          >
            GitHub
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Shritej Reddy. Built with Next.js,
          Tailwind, and ✨.
        </p>
      </footer>
    );
  }
  