'use client'
import { useState } from 'react';
import { updateNote, deleteNote } from '@/app/lib/actions';

export default function NoteItem({ note }: { note: any }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <form 
        action={async (formData) => {
          await updateNote(note._id, formData);
          setIsEditing(false);
        }}
        className="p-4 border-2 border-blue-500 rounded-lg bg-blue-50 space-y-3"
      >
        <input name="title" defaultValue={note.title} className="w-full p-2 border rounded" required />
        <textarea name="content" defaultValue={note.content} className="w-full p-2 border rounded" rows={3} required />
        <div className="flex gap-2">
          <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded text-sm">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-3 py-1 rounded text-sm">Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-start">
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800">{note.title}</h2>
        <p className="text-gray-600 mt-1 whitespace-pre-wrap">{note.content}</p>
        <p className="text-[10px] text-gray-400 mt-3 uppercase tracking-wider">
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="flex flex-col gap-2 ml-4">
        <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">Edit</button>
        <button onClick={() => deleteNote(note._id)} className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}