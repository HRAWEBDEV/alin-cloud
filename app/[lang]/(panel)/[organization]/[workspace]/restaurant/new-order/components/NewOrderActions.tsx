"use client";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import LinearLoading from "@/app/[lang]/(panel)/components/LinearLoading";
import { Button } from "@/components/ui/button";
import { IoReload } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getSettingsIcon } from "@/app/[lang]/(panel)/services/settings/utils/getSettingsIcon";
import { useSettingsContext } from "@/app/[lang]/(panel)/services/settings/settingsContext";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import { Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import DishIcon from "@/app/[lang]/(panel)/components/navigation/icons/DishIcon";
import { FaInfoCircle } from "react-icons/fa";

export default function NewOrderActions() {
  const { dic } = useNewOrderControlContext();
  const { localeInfo } = useBaseConfig();
  const { toggleOpen } = useSettingsContext();
  const {
    shareDictionary: {
      components: { settings },
    },
  } = useShareDictionary();

  const itemGroupsButtonClass = `transition-[height_0.4s_ease] w-full ${false ? "min-h-14" : "min-h-20"} border border-border rounded-xl p-2 flex flex-col items-center justify-center gap-1 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 data-[active="true"]:bg-primary data-[active="true"]:text-white data-[active="true"]:dark:text-primary-foreground cursor-pointer`;

  const [sliderRef] = useKeenSlider({
    rtl: localeInfo.contentDirection === "rtl",
    breakpoints: {
      "(max-width:1280px)": {
        slides: {
          perView: 6.5,
          spacing: 4,
        },
      },
      "(max-width:980px)": {
        slides: {
          perView: 4.5,
          spacing: 4,
        },
      },
      "(max-width:700px)": {
        slides: {
          perView: 3.5,
          spacing: 4,
        },
      },
    },
    slides: {
      perView: 8.5,
      spacing: 4,
    },
  });

  return (
    <header className="sticky top-0 bg-background z-2 py-2 overflow-hidden mb-2">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="flex gap-2 items-center justify-between mb-2">
        <div className="grid grid-cols-[max-content_minmax(10rem,15rem)] gap-2">
          <Button
            variant="outline"
            size="icon"
            className="text-primary border-primary bg-primary/5 relative"
          >
            <FaInfoCircle className="size-5" />
          </Button>
          <Field>
            <InputGroup className="bg-background">
              <InputGroupInput
                type="search"
                placeholder={dic.filters.search + " ..."}
              />
              <InputGroupAddon align="inline-start">
                <IoIosSearch className="size-5" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <IoReload className="size-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="destructive" size="icon">
                  <IoSettingsSharp className="size-5" />
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-auto">
              <DropdownMenuItem
                className="h-11"
                onClick={() => {
                  toggleOpen(true, "shortcuts");
                }}
              >
                {getSettingsIcon("shortcuts", {
                  className: "size-5",
                })}
                <span>{settings.shortcuts}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="h-11"
                onClick={() => {
                  toggleOpen(true, "help");
                }}
              >
                {getSettingsIcon("help", {
                  className: "size-5",
                })}
                <span>{settings.help}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="keen-slider overflow-hidden" ref={sliderRef}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <div
              key={item}
              className={`keen-slider__slide number-slide${item}`}
            >
              <button
                data-active={item === 2}
                className={itemGroupsButtonClass}
              >
                {true && <DishIcon className="size-8 shrink-0" />}
                <p className="text-wrap text-sm font-medium">صبحانه </p>
              </button>
            </div>
          );
        })}
      </div>
    </header>
  );
}
