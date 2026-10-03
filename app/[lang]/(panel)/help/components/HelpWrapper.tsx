"use client";
import { useMemo, useState } from "react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useHelpContext } from "../services/HelpContext";
import HelpItem from "./HelpItem";
import NoItemFound from "../../components/NoItemFound";

export default function HelpWrapper() {
  const [searchText, setSearchText] = useState("");
  const {
    shareDictionary: {
      components: { help: dic },
    },
  } = useShareDictionary();
  const { helpList } = useHelpContext();

  const visibleHelpList = useMemo(() => {
    return helpList.filter((item) => {
      return dic[item.type].includes(searchText);
    });
  }, [helpList, searchText, dic]);

  return (
    <div className="pt-0 p-4">
      <div className="py-4 sticky top-0 bg-popover">
        <div className="grid gap-2 grid-cols-1">
          <Field>
            <InputGroup className="bg-neutral-100 dark:bg-neutral-900">
              <InputGroupInput
                id="search"
                type="search"
                placeholder={dic.search + " ..."}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <InputGroupAddon align="inline-start">
                <IoIosSearch className="size-5" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {visibleHelpList.map((help) => (
          <HelpItem key={help.type} help={help} searchText={searchText} />
        ))}
        <div className="last:hidden first:block!">
          <NoItemFound searchedText={searchText} />
        </div>
      </div>
    </div>
  );
}
