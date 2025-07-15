import { getHackMDNoteById } from "../../../actions/hackmd-actions";
import { PostPage } from "../../../components/PostPage";
import { notFound } from "next/navigation";
import { PageTransitionLayout } from "../../../components/PageTransitionLayout";

interface PageProps {
  params: Promise<{
    noteId: string;
  }>;
}

export default async function PostPageRoute({ params }: PageProps) {
  const { noteId } = await params;

  try {
    const note = await getHackMDNoteById(noteId);

    if (!note) {
      notFound();
    }

    return (
      <PageTransitionLayout>
        <PostPage note={note} />
      </PageTransitionLayout>
    );
  } catch (error) {
    console.error("Error fetching note:", error);
    notFound();
  }
}
