import { Metadata } from "next";
import ResumeEditor from "./resume-editor";

export const metadata: Metadata = {
  title: "Create Resume",
};

export default function EditorPage() {
  return <ResumeEditor />;
}
