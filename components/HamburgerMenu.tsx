"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

class CarCollection {
  maker: string;
  model: string;
  maker_value: string;
  model_value: string;

  constructor(
    maker: string,
    model: string,
    maker_value: string,
    model_value: string
  ) {
    this.maker = maker;
    this.model = model;
    this.maker_value = maker_value;
    this.model_value = model_value;
  }
}

const models: CarCollection[] = [
  new CarCollection("Tesla", "Roadster", "tesla", "roadster"),
  new CarCollection("Tesla", "Model S", "tesla", "model-s"),
  new CarCollection("Tesla", "Model 3", "tesla", "model-3"),
];

// const models = [
//   {
//     label: "Roadster",
//     maker: "tesla",
//     value: "roadster",
//   },
//   {
//     label: "Model S",
//     maker: "tesla",
//     value: "model-s",
//   },
//   {
//     label: "Model 3",
//     maker: "tesla",
//     value: "model-3",
//   },
// ];

export function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full"
        >
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="13"></rect>
            <rect y="30" width="100" height="13"></rect>
            <rect y="60" width="100" height="13"></rect>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Model..." />
          <CommandEmpty>No model found.</CommandEmpty>
          <CommandGroup>
            {/* {models.map((model) => (
              <CommandItem
                key={model.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  router.push(`/${model.maker}/${model.value}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === model.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {model.label}
              </CommandItem>
            ))} */}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default HamburgerMenu;
