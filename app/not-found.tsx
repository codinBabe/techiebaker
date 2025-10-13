import Reveal from "@/components/reveal";
import Link from "next/link";

const NotFound = () => (
  <Reveal className="flex flex-col gap-5 items-center justify-center h-screen text-center">
    <h1 className="font-sans font-bold text-6xl">404 - Not Found</h1>
    <p className="text-lg">
      Sorry, the page you`&apos;re looking for doesn`&apos;t exist.
    </p>
    <Link
      href="/"
      className="bg-primary border-2 text-white text-sm px-5 py-3 rounded-lg"
    >
      Go back to Homepage
    </Link>
  </Reveal>
);

export default NotFound;
