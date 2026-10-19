"use client";
import { TabsTrigger } from "@/components/ui/tabs";
import { LiaTimesSolid } from "react-icons/lia";
import { type HistoryContextProps } from "../historyContext";
import { useFindNavigationItemByPathname } from "../../../hooks/useFindNavigationItem";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useHistoryContext } from "../historyContext";
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/react/sortable";
import { RestrictToHorizontalAxis } from "@dnd-kit/abstract/modifiers";
import { RefObject } from "react";

export default function HistoryTabItem({
  item,
  index,
}: {
  item: HistoryContextProps["historyList"][number];
  index: number;
  containterRef: RefObject<HTMLDivElement | null>;
}) {
  const { ref } = useSortable({
    id: item.id,
    index,
    modifiers: [RestrictToHorizontalAxis],
  });
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
      ref={ref}
      key={item.id}
      value={`${item.path}?${item.search}`}
      className="text-start justify-start bg-neutral-200 dark:bg-neutral-900 cursor-pointer font-normal"
      onMouseDown={(e) => {
        if (e.button === 1) {
          onDeleteHistory(item.id);
        }
      }}
      onClick={() => {
        router.push(`${item.path}?${item.search}`);
      }}
      render={
        <motion.button>
          <div className="grow truncate">
            {navItem ? dic[navItem.name as keyof typeof dic] : ""}
          </div>
          <Button
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteHistory(item.id);
            }}
            render={
              <div>
                <LiaTimesSolid className="text-destructive/50" />
              </div>
            }
          />
        </motion.button>
      }
    />
  );
}
