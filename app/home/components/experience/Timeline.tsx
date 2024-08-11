import { twMerge } from "tailwind-merge";
import { IExperience, experienceData } from "./experienceData";

function WorkItem_P({
  time,
  company,
  jobTitle,
  companyDesc,
  jobDesc,
  projectDes,
  type,
}: IExperience) {
  return (
    <div className="flex items-center justify-center divide-x-2 divide-sky-600">
      <div className="p-6 font-sans w-[200px] text-right">{time}</div>

      <div className="relative p-6">
        <div
          className={twMerge(
            "rounded-[20px]  w-4 h-4 bg-white border border-[2px] border-sky-600",
            "ring-4 ring-sky-600/30",
            "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
            "z-10"
          )}
        />
        <div
          className={twMerge(
            "absolute top-1/2 left-0 w-[50px] h-[2px]",
            "bg-sky-600"
          )}
        />

        <div className="bg-slate-50 ml-[50px] rounded-xl p-4 shadow-lg w-[800px] z-10 relative">
          <div
            className={twMerge(
              "absolute font-sans border border-1 bg-neutral-300  right-4 top-4",
              "px-2 rounded text-[14px] uppercase",
              "text-teal-800 bg-teal-200 border-teal-800"
            )}
          >
            {type}
          </div>
          <div className="w-6 h-6 bg-slate-50 absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-45"></div>
          <div className="font-bold text-xl">{jobTitle}</div>
          <div className="font-semibold">{company}</div>
          <div className="text-sm mt-2">{companyDesc}</div>
          <ul className="list-disc list-inside text-sm p-4">
            {jobDesc?.map((item, index) => (
              <li className="mt-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkItem_D({
  time,
  company,
  jobTitle,
  companyDesc,
  jobDesc,
  projectDes,
  type,
}: IExperience) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative p-6 border-r-2 border-sky-600">
        <div className="bg-slate-50 mr-[50px] rounded-xl p-4 shadow-lg z-10 relative w-[600px]">
          <div
            className={twMerge(
              "absolute font-sans border border-1 bg-neutral-300  right-4 top-4",
              "px-2 rounded text-[14px] uppercase",
              "text-amber-800 bg-amber-200 border-amber-800"
            )}
          >
            {type}
          </div>

          <div className="w-6 h-6 bg-slate-50 absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2 rotate-45"></div>
          <div className="font-bold text-xl">{jobTitle}</div>
          <div className="font-semibold">{company}</div>
          <div className="text-sm mt-2">{companyDesc}</div>

          <div className="mt-2 text-sm">
            {projectDes?.map((item, index) => (
              <div key={index}>
                <div className="font-semibold">{item.name}</div>
                <div>{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={twMerge(
            "rounded-[20px]  w-4 h-4 bg-white border border-[2px] border-sky-600",
            "ring-4 ring-sky-600/30",
            "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
            "z-10"
          )}
        />
        <div
          className={twMerge(
            "absolute top-1/2 right-0 w-[50px] h-[2px]",
            "bg-sky-600"
          )}
        />
      </div>
      <div className="p-6 font-sans w-[400px] text-left">{time}</div>
    </div>
  );
}

function Other({ content }: IExperience) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative p-6 border-r-2 border-sky-600">
        <div className="bg-slate-50 mr-[50px] ml-[150px] rounded-xl p-4 shadow-lg z-10 relative w-[450px]">
          <div className="w-6 h-6 bg-slate-50 absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2 rotate-45"></div>
          <div className="text-pre text-center">{content}</div>
        </div>

        <div
          className={twMerge(
            "rounded-[20px]  w-4 h-4 bg-white border border-[2px] border-sky-600",
            "ring-4 ring-sky-600/30",
            "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
            "z-10"
          )}
        />
        <div
          className={twMerge(
            "absolute top-1/2 right-0 w-[50px] h-[2px]",
            "bg-sky-600"
          )}
        />
      </div>
      <div className="p-6 font-sans w-[400px] text-left"></div>
    </div>
  );
}

function Education({ time, type, program, school }: IExperience) {
  return (
    <div className="flex items-center justify-center divide-x-2 divide-sky-600">
      <div className="p-6 font-sans w-[400px] text-right">{time}</div>

      <div className="relative p-6">
        <div
          className={twMerge(
            "rounded-[20px]  w-4 h-4 bg-white border border-[2px] border-sky-600",
            "ring-4 ring-sky-600/30",
            "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
            "z-10"
          )}
        />
        <div
          className={twMerge(
            "absolute top-1/2 left-0 w-[50px] h-[2px]",
            "bg-sky-600"
          )}
        />

        <div className="bg-slate-50 ml-[50px] rounded-xl p-4 shadow-lg w-[600px] z-10 relative">
          <div
            className={twMerge(
              "absolute font-sans border border-1 bg-neutral-300  right-4 top-4",
              "px-2 rounded text-[14px] uppercase",
              "text-indigo-800 bg-indigo-200 border-indigo-800"
            )}
          >
            {type}
          </div>
          <div className="w-6 h-6 bg-slate-50 absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 rotate-45"></div>
          <div className="font-semibold text-xl">{school}</div>
          <div className="text-sm">{program}</div>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="m-20 w-full">
      {experienceData.map((item, index) => {
        switch (item.type) {
          case "designer":
            return <WorkItem_D {...item} key={index} />;
          case "developer":
            return <WorkItem_P {...item} key={index} />;

          case "education":
            return <Education {...item} key={index} />;
          default:
            return <Other {...item} key={index} />;
        }
      })}
    </div>
  );
}
