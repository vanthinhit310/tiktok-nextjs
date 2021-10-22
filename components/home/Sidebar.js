import { Box, List, ListItem, Icon, Text, Button, Link, Flex, Spacer, Avatar, HStack, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import NextLink from "next/link";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar-content">
                <Box w="100%">
                    <List>
                        <ListItem className="sidebar-item-hover">
                            <NextLink href="/">
                                <Link fontWeight="semibold" fontSize="lg">
                                    <Icon as={AiFillHome} mr={2} boxSize="1.4rem" /> For You
                                </Link>
                            </NextLink>
                        </ListItem>
                        <ListItem className="sidebar-item-hover">
                            <NextLink href="/">
                                <Link fontWeight="semibold" fontSize="lg">
                                    <Icon as={FiUsers} mr={2} boxSize="1.4rem" /> Following
                                </Link>
                            </NextLink>
                        </ListItem>
                    </List>
                </Box>
                <Box w="100%">
                    <Text fontSize="sm">Log in to follow creators, like videos, and view comments.</Text>
                    <Button width="100%" variant="pink-outline" size="lg">
                        Log in
                    </Button>
                </Box>
                <Box w="100%">
                    <Flex>
                        <Box>
                            <Text fontWeight="semibold" fontSize="xs">
                                Suggested accounts
                            </Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Link fontWeight="semibold" variant="pink-link" fontSize="xs">
                                See all
                            </Link>
                        </Box>
                    </Flex>
                </Box>
                <Box w="100%">
                    <List spacing={0}>
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <ListItem key={i}>
                                <Link>
                                    <HStack spacing="7px">
                                        <Box w="40px">
                                            <Avatar size="45px" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" className="account__name" fontWeight="bold">
                                                beatvn__offical
                                            </Text>
                                            <Text fontSize="xs" textTransform="uppercase">
                                                BEATVN
                                            </Text>
                                        </Box>
                                    </HStack>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box w="100%">
                    <Text fontWeight="semibold" fontSize="xs">
                        Discover
                    </Text>
                    <Wrap>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                            <WrapItem key={i}>
                                <Link>
                                    <Tag fontSize="xs" fontWeight="normal">
                                        #danhbayvirus
                                    </Tag>
                                </Link>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
                <Box w="100%" className="sidebar-button">
                    <Wrap>Wrap</Wrap>
                </Box>
            </div>
        </section>
    );
}

export default Sidebar;
