export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen bg-blue-50">
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="px-10 flex items-center w-full h-[50px] text-[14px] justify-between">
            <div>Home</div>
            <div className="flex gap-4">
          <div>Developer</div>
          <div>·</div>
          <div>Design</div>
          <div>·</div>
          <div>Exploring</div>
          </div>

          <div className="flex-end">Contact</div>
        </nav>

        {children}
      </section>
    </main>
  );
}
