import { Menu, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Shield className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold">FortKnox</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="hidden text-sm font-medium underline-offset-4 hover:underline sm:inline-block"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="hidden text-sm font-medium underline-offset-4 hover:underline sm:inline-block"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="hidden text-sm font-medium underline-offset-4 hover:underline sm:inline-block"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hidden text-sm font-medium underline-offset-4 hover:underline sm:inline-block"
          href="/contact"
        >
          Contact
        </Link>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>
    </header>
  );
}
