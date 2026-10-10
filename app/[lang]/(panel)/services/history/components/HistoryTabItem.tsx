"use client";
import { TabsTrigger } from "@/components/ui/tabs";
import { LiaTimesSolid } from "react-icons/lia";
import { type HistoryContextProps } from "../historyContext";
import { useFindNavigationItemByPathname } from "../../../hooks/useFindNavigationItem";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useHistoryContext } from "../historyContext";

export default function HistoryTabItem({
  item,
}: {
  item: HistoryContextProps["historyList"][number];
}) {
  const router = useRouter();
  const { onDeleteHistory } = useHistoryContext();
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();
  const check = useFindNavigationItemByPathname();
  const navItem = check(item.path);
  return (
    <TabsTrigger
      key={item.id}
      value={`${item.path}`}
      className="text-start justify-start bg-neutral-200 dark:bg-neutral-900 cursor-pointer font-normal"
      onClick={() => {
        router.push(`${item.path}?${item.search}`);
      }}
    >
      <div className="grow truncate">
        {navItem ? dic[navItem.name as keyof typeof dic] : ""}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="p-1"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteHistory(item.id);
        }}
      >
        <LiaTimesSolid className="text-destructive/50" />
      </Button>
    </TabsTrigger>
  );
}
