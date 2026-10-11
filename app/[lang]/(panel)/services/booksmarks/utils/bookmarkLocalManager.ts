const bookmarkListLocalKey = "bookmark-list";

function getLocalBookmarkList() {
  const savedItem = localStorage.getItem(bookmarkListLocalKey);
  return savedItem ? JSON.parse(savedItem) : [];
}

function saveLocalBookmarkList(bookarkList: string[]): void {
  localStorage.setItem(bookmarkListLocalKey, JSON.stringify(bookarkList));
}

export { bookmarkListLocalKey, getLocalBookmarkList, saveLocalBookmarkList };
