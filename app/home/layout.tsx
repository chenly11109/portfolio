import Landing from "./components/Landing";
import Home from "./components/Home";
import NavLink from "./components/NavLink";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-base">
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavLink href="/home/projects" />

        <div>
          <Landing />
          <Home />
          <div className="w-full overflow-hidden">{children}</div>
        </div>
      </section>

      <footer className="text-sm font-sans w-full h-full h-[60px] text-white bg-sky-900 text-center leading-[60px]">
        Copyright © Lingya Chen (chenlingya109@gmail.com). All Rights Reserved.
      </footer>
    </main>
  );
}
