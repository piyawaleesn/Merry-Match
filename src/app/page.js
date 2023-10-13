import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-main-100 mb-3">
        <h1>Hello!</h1>
      </main>
      <Link href={"/users"} className="bg-red-300 p-1">
        Go to users
      </Link>
    </>
  );
}
