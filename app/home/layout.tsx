import Link from "next/link";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen">
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="px-10 flex items-center w-full h-[50px] text-[14px] justify-between">
          <Link href="/home">Home | Lingya`s portfolio</Link>

          <div className="flex gap-5">
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer">Resume</div>
          </div>
        </nav>

        {children}
      </section>
    </main>
  );
}
