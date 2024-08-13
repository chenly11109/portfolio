import { designPojects } from "../designData";
import NavLink from "@/app/home/components/NavLink";
import Image from "next/image";

export async function generateStaticParams() {
  return designPojects.map((project) => ({
    id: project.keyIndex + '',
  }))
}

export default function DesignProject({ params }: { params: { id: number } }) {
  const item = designPojects[params.id - 1];
  const {
    overview,
    projectTitle,
    tagline,
    keyFeatures,
    src,
    additionalInformation,
  } = item;
  return (
    <main className="text-base">
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavLink href="/home/design" />
      </section>
      <div className="justify-center w-full flex p-20">
        <div className="max-w-[800px] flex flex-col gap-4">
          <Image src={src[0]} width={800} height={800} alt={projectTitle} />
          <div className="w-full text-center text-2xl font-bold">
            {projectTitle}
          </div>
          <div className="text-center">{tagline}</div>

          <div className="indent-4 text-pretty mb-8 text-sm text-black/80">
            {overview}
          </div>
          <div>
            {src.slice(1, -1).map((item, index) => (
              <div key={index} className="my-4">
                <Image src={item} width={800} height={800} alt={projectTitle} />
              </div>
            ))}
          </div>

          <div>
            {keyFeatures.map((item, index) => (
              <div key={index} className="mb-8">
                <div className="text-bold text-xl">{item.feature}</div>
                <div className="text-sm text-black/80">{item.description}</div>
              </div>
            ))}
          </div>

          <Image
            src={src[src.length - 1]}
            width={800}
            height={800}
            alt={projectTitle}
          />

          {additionalInformation && (
            <div className="indent-4 text-pretty mb-8 text-sm text-black/80">
              {additionalInformation}
            </div>
          )}
        </div>
      </div>
      <footer className="text-sm font-sans w-full h-full h-[60px] text-white bg-sky-900 text-center leading-[60px]">
        Copyright © Lingya Chen (chenlingya109@gmail.com). All Rights Reserved.
      </footer>
    </main>
  );
}
