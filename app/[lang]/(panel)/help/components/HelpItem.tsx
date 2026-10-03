"use client";
import { useEffect, useState } from "react";
import { HelpContextProps } from "../services/HelpContext";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useHelpContext } from "../services/HelpContext";
import Highlighter from "react-highlight-words";

export default function HelpItem({
  help,
  searchText,
}: {
  help: HelpContextProps["helpList"][number];
  searchText: string;
}) {
  const [content, setContent] = useState("");
  const {
    shareDictionary: {
      components: { help: dic },
    },
  } = useShareDictionary();
  const { onGetHelpContent } = useHelpContext();

  useEffect(() => {
    onGetHelpContent(help).then((res) => {
      setContent(res);
    });
  }, [help, onGetHelpContent]);

  return (
    <Collapsible key={help.type} className="data-[open]:mb-4">
      <CollapsibleTrigger
        render={
          <Button
            variant="outline"
            className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground text-start gap-4 font-normal min-h-10 sticky top-16"
          >
            <Highlighter
              searchWords={[searchText]}
              textToHighlight={dic[help.type]}
              className="grow"
            />
            <ChevronRightIcon className="transition-transform group-data-[panel-open]:rotate-90 rtl:rotate-180" />
          </Button>
        }
      />
      <CollapsibleContent>
        <article className="prose py-2">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </CollapsibleContent>
    </Collapsible>
  );
}
