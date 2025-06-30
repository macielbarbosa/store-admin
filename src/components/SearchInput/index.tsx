import { useState } from "react";
import { useAtom } from "jotai";
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, TextField } from "@radix-ui/themes";

import { searchAtom } from "@/state/search";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useAtom(searchAtom);

  const submit = () => {
    setSearch(value);
  };

  const reset = () => {
    setValue("");
    setSearch("");
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };

  return (
    <Flex gap="1">
      <TextField.Root
        placeholder="Busque na Triskin Store"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        size="3"
        onKeyDown={onKeyDown}
      >
        <TextField.Slot side="right" pr="3">
          <IconButton
            style={{
              visibility: value.length || search.length ? "visible" : "hidden",
            }}
            size="2"
            variant="ghost"
            onClick={reset}
          >
            <Cross1Icon height="16" width="16" />
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
      <IconButton size="3" variant="soft" onClick={submit}>
        <MagnifyingGlassIcon height="20" width="20" />
      </IconButton>
    </Flex>
  );
};
