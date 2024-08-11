"use client";
import ResumePDF from "./Resumepdf";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  }
);
export default function ResumeDownload() {
  return (
    <div className="w-[200px]">
      <PDFDownloadLink document={<ResumePDF />} fileName="LingyaChenResume.pdf">
        {({ loading }) => (
          <div
            className={twMerge(
              "rounded-lg border text-center mt-8 p-1 w-full border-2 border-sky-600 text-sky-600 bg-sky-600/5 transition-common",
              "shadow-md shadow-sky-600/10 cursor-pointer hover:bg-sky-800/5 hover:text-sky-800 hover:border-sky-800",
              "active:translate-y-1 font-sans",
              loading && "cursor-not-allowed"
            )}
          >
            {loading ? "Loading Resume..." : "Download Resume"}
          </div>
        )}
      </PDFDownloadLink>
    </div>
  );
}
