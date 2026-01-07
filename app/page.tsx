import clientPromise from "@/app/lib/mongodb";
import { createNote } from "@/app/lib/actions";
import NoteItem from "@/app/src/components/NoteItem";

export default async function Home() {
  const client = await clientPromise;
  const notes = await client
    .db("note_db")
    .collection("notes")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const serializedNotes = notes.map((note) => ({
    ...note,
    _id: note._id.toString(),
    createdAt: note.createdAt.toISOString(),
  }));

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 text-gray-700">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          NoteStack
        </h1>
-
        <section className="bg-white p-6 rounded-xl shadow-md mb-10 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Create New Note</h2>
          <form action={createNote} className="space-y-4">
            <input
              name="title"
              placeholder="Title"
              className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              name="content"
              placeholder="Write your thoughts..."
              className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Save Note
            </button>
          </form>
        </section>
        
        <div className="space-y-4">
          {serializedNotes.length === 0 && (
            <p className="text-center text-gray-500">
              No notes yet. Add one above!
            </p>
          )}
          {serializedNotes.map((note) => (
            <NoteItem key={note._id} note={note} />
          ))}
        </div>
      </div>
    </main>
  );
}
