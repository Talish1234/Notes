'use server'

import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

async function getCollection() {
  const client = await clientPromise;
  return client.db("note_db").collection("notes");
}

export async function createNote(formData: FormData) {
  const collection = await getCollection();
  await collection.insertOne({
    title: formData.get("title"),
    content: formData.get("content"),
    createdAt: new Date(),
  });
  revalidatePath("/");
}

export async function deleteNote(id: string) {
  const collection = await getCollection();
  await collection.deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/");
}

export async function updateNote(id: string, formData: FormData) {
  const collection = await getCollection();
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: { 
        title: formData.get("title"), 
        content: formData.get("content") 
      } 
    }
  );
  revalidatePath("/");
}