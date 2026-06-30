import { redirect } from "next/navigation";

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  redirect(`/${locale}/interests`);
}