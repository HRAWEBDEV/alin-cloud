"use client";
import { useState } from "react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";

export default function HelpWrapper() {
  const [searchText, setSearchText] = useState("");
  const {
    shareDictionary: {
      components: { help: dic },
    },
  } = useShareDictionary();

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
    </div>
  );
}
