import { Metadata } from "next";
import ProjectViewer from "@/components/project-viewer";

export const metadata: Metadata = {
  title: "Works | Oluwatoyin Oredein",
  description:
    "Explore the projects and works of Oluwatoyin Oredein, showcasing a diverse portfolio of software development and digital experiences.",
};

export default function Page() {
  return (
    <ProjectViewer
      title="Works"
      titleCls
      className="md:my-10 relative overflow-hidden"
    />
  );
}
