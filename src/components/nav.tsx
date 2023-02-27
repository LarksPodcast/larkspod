import Link from "next/link";

export default function Nav() {
  return (
    <nav>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/episodes">Episodes</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
    </nav>
  );
}
