import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mb-10 p-5">
      <ul className="flex justify-evenly w-full">
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
