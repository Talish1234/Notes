# Notes
A sleek, full-stack notes management application built with Next.js, MongoDB, and Tailwind CSS. This app demonstrates modern web development patterns including Server Components, Server Actions, and real-time database revalidation.

## 🚀 Features
Create: Instantly capture thoughts with a title and content.

Read: View a list of all notes, sorted by the most recent.

Update: Edit existing notes in-place using a dynamic UI toggle.

Delete: Remove notes with automatic UI updates via revalidatePath.

Responsive Design: Fully mobile-responsive UI built with Tailwind CSS.

Server Actions: No manual API route management; logic is handled directly via Next.js Server Actions.

## 🛠️ Tech Stack
Framework: Next.js (App Router)

Database: MongoDB (using the official MongoDB Driver)

Styling: Tailwind CSS

Language: TypeScript

📦 Getting Started
1. Clone the repository
```Bash

git clone https://github.com/Talish1234/Notes
cd Notes
```
2. Install dependencies
```Bash

npm install
```
3. Set up environment variables
Create a .env.local file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/note_db
```
4. Run the development server
```Bash

npm run dev
```
Open http://localhost:3000 in your browser to see the result.

## 📂 Project Structure
src/app/page.tsx: The main Server Component that fetches and displays notes.

src/components/NoteItem.tsx: A Client Component handling the interactive Edit/Save/Delete logic.

src/lib/actions.ts: Contains the Server Actions for MongoDB CRUD operations.

src/lib/mongodb.ts: The singleton database connection utility.