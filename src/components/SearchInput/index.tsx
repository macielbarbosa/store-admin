import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { useDebounce } from "use-debounce";
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, TextField } from "@radix-ui/themes";

import { searchAtom } from "@/state/search";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const setSearch = useSetAtom(searchAtom);
  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <Flex gap="1">
      <TextField.Root
        placeholder="Busque na Triskin Store"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        size="3"
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Slot side="right" pr="3">
          <IconButton
            style={{
              visibility: value.length ? "visible" : "hidden",
            }}
            size="2"
            variant="ghost"
            onClick={() => setValue("")}
          >
            <Cross1Icon height="16" width="16" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};
