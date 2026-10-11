"use client";
import { ReactNode, useState, useEffect } from "react";
import {
  type BookmarksContextProps,
  BookmarksContext,
} from "./bookmarksContenxt";
import {
  getLocalBookmarkList,
  saveLocalBookmarkList,
} from "./utils/bookmarkLocalManager";

export default function BookmarksProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookmarksList, setBookmarksList] = useState<
    BookmarksContextProps["bookmarksList"]
  >([]);

  function checkIsBookmarked(path: string) {
    return bookmarksList.includes(path);
  }

  function handleToggleBookmark(path: string) {
    let newBookmarksList = [...bookmarksList];
    if (checkIsBookmarked(path)) {
      newBookmarksList = newBookmarksList.filter((item) => item !== path);
    } else {
      newBookmarksList.push(path);
    }
    setBookmarksList(newBookmarksList);
    saveLocalBookmarkList(newBookmarksList);
  }

  const ctx: BookmarksContextProps = {
    bookmarksList,
    checkIsBookmarked,
    onToggleBookmark: handleToggleBookmark,
  };

  useEffect(() => {
    setBookmarksList(getLocalBookmarkList());
  }, []);

  return (
    <BookmarksContext.Provider value={ctx}>
      {children}
    </BookmarksContext.Provider>
  );
}
