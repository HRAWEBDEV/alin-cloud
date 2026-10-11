import { createContext, use } from "react";

interface BookmarksContextProps {
  bookmarksList: string[];
  checkIsBookmarked: (path: string) => boolean;
  onToggleBookmark: (path: string) => void;
}

const BookmarksContext = createContext<BookmarksContextProps | null>(null);

function useBookmarksContext() {
  const val = use(BookmarksContext);
  if (!val) throw new Error("BookmarksContext");
  return val;
}

export type { BookmarksContextProps };
export { BookmarksContext, useBookmarksContext };
