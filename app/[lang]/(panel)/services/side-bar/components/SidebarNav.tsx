"use client";
import { useState } from "react";
import { navigationItems } from "../../../utils/navigationItems";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";
import SidebarNavItem from "./SidebarNavItem";
import NoItemFound from "../../../components/NoItemFound";

export default function SidebarNav() {
  const [searchText, setSearchText] = useState("");
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();

  return (
    <div className="w-full grow overflow-auto">
      <div className="p-2.5 py-2 bg-sidebar sticky top-0 z-3">
        <Field>
          <InputGroup className="bg-background">
            <InputGroupInput
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
      <div className="flex flex-col text-neutral-800 dark:text-neutral-200">
        {navigationItems.map((item) => (
          <SidebarNavItem
            key={item.name}
            navItem={item}
            searchText={searchText}
          />
        ))}
        <div className="last:hidden first:block!">
          <NoItemFound searchedText={searchText} />
        </div>
      </div>
    </div>
  );
}
