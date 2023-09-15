import Link from "next/link";
import { routes } from "./routes";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="px-80">
      <Header level="h1" text="Learning Tailwind CSS" />

      <div className="flex flex-col gap-3 mt-5">
        <h3 className="text-2xl font-semibold">Topics:</h3>

        {routes.map(({ href, title }) => (
          <ul key={href}>
            <Link className="text-blue-500 hover:text-blue-600" href={href}>
              {title}
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
}
