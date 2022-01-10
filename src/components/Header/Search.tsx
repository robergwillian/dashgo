import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Search() {
  // const [search, setSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null)

  //debounce - evitar que seja feita a busca a cada letra digitada, sera executada depois de alguns segundos que o usuario parar de digitar

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: "gray.400",
        }}
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
