import dynamic from "next/dynamic";

const ResumeContainer = dynamic(() => import("./components/ResumeContainer"), {
  ssr: false,
});
export default function Resume() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <ResumeContainer />
    </div>
  );
}
