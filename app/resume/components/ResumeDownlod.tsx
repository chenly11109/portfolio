"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./Resumepdf";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ResumeDownload() {
  return (
    <PDFDownloadLink document={<ResumePDF />} fileName="LingyaChenResume.pdf">
      {({ loading }) => (
        <div
          className={twMerge(
            "rounded-lg border text-center mt-8 p-1 w-[200px] border-2 border-sky-600 text-sky-600 bg-sky-600/5 transition-common",
            "shadow-md shadow-sky-600/10 cursor-pointer hover:bg-sky-800/5 hover:text-sky-800 hover:border-sky-800",
            "active:translate-y-1",
            inter.className,
            loading && "cursor-not-allowed"
          )}
        >
          {loading ? "Loading Resume.." : "Download Resume"}
        </div>
      )}
    </PDFDownloadLink>
  );
}
