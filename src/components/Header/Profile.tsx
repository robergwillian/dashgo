import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Willian Melo</Text>
          <Text color="gray.300" fontSize="small">
            roberg.willian@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Willian Melo"
        src="https://github.com/robergwillian.png"
      />
    </Flex>
  );
}
