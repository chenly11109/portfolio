"use client";
import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import ResumePDF from "./Resumepdf";

const ResumeContainer = () => {
  return (
    <BlobProvider document={<ResumePDF />}>
      {({ blob, url, loading, error }) => {
        if (loading || !url) return;
        return (
          <iframe src={url} className="w-screen h-screen overflow-hidden" />
        );
      }}
    </BlobProvider>
  );
};

export default ResumeContainer;
