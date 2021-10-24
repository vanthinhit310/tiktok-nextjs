import {
    Modal,
    ModalOverlay,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Flex,
    Box,
    Spacer,
    List,
    ListItem,
    Button,
    HStack,
    Avatar,
    Text,
    Icon,
    Link
} from "@chakra-ui/react";
import _ from "lodash";
import { AiFillCheckCircle } from "react-icons/ai";

function SuggestedAccount({ isOpen, onClose }) {
    return (
        <Modal scrollBehavior="inside" blockScrollOnMount={true} size="2xl" isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize="md" fontWeight="nomal">
                    Suggested
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <List spacing={3}>
                        {_.range(1, 20, 1).map(index => {
                            return (
                                <ListItem key={index}>
                                    <Link variant="account-badge">
                                        <Flex w="100%" alignItems="center">
                                            <Box w="100%">
                                                <HStack>
                                                    <Box w="40px">
                                                        <Avatar size="40px" name="vtv24news" src="https://bit.ly/sage-adebayo" />
                                                    </Box>
                                                    <Box w="100%">
                                                        <Box w="100%">
                                                            <HStack spacing="5px">
                                                                <Text fontSize="sm" className="account__name" fontWeight="semibold">
                                                                    vtv24news
                                                                </Text>
                                                                <Icon as={AiFillCheckCircle} w={5} h={5} color="green.300" />
                                                                <Text fontWeight="semobold" fontSize="2xs">
                                                                    VTV24
                                                                </Text>
                                                            </HStack>
                                                        </Box>

                                                        <Box w="100%">
                                                            <Text fontSize="xs" noOfLines={1} fontWeight="normal">
                                                                Mang tin tức đến gần hơn với giới trẻ Mang tin tức đến gần hơn với giới trẻ Mang tin tức đến gần
                                                                hơn với giới trẻ Mang tin tức đến gần hơn với giới trẻ Mang tin tức đến gần hơn với giới trẻ
                                                                Mang tin tức đến gần hơn với giới trẻ Mang tin tức đến gần hơn với giới trẻ
                                                            </Text>
                                                        </Box>
                                                    </Box>
                                                </HStack>
                                            </Box>
                                            <Spacer />
                                            <Box ml={5}>
                                                <Button variant="pink-outline">Follow</Button>
                                            </Box>
                                        </Flex>
                                    </Link>
                                </ListItem>
                            );
                        })}
                    </List>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default SuggestedAccount;
