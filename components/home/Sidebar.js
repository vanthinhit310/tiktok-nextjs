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
                                <a>
                                    <Icon as={AiFillHome} mr={2} boxSize="1.4rem" /> For You
                                </a>
                            </NextLink>
                        </ListItem>
                        <ListItem className="sidebar-item-hover">
                            <NextLink href="/">
                                <a>
                                    <Icon as={FiUsers} mr={2} boxSize="1.4rem" /> Following
                                </a>
                            </NextLink>
                        </ListItem>
                    </List>
                </Box>
                <Box w="100%">
                    <Text>Log in to follow creators, like videos, and view comments.</Text>
                    <Button width="100%" variant="pink-outline" size="lg">
                        Log in
                    </Button>
                </Box>
                <Box w="100%">
                    <Flex>
                        <Box>
                            <Text>Suggested accounts</Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Link>See all</Link>
                        </Box>
                    </Flex>
                </Box>
                <Box w="100%">
                    <List spacing={5}>
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <ListItem>
                                <Link>
                                    <HStack spacing="15px">
                                        <Box w="45px">
                                            <Avatar size="45px" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                                        </Box>
                                        <Box>
                                            <Text fontSize="14px" className="account__name" fontWeight="bold">
                                                beatvn__offical
                                            </Text>
                                            <Text fontSize="11px" textTransform="uppercase">
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
                    <Text>Discover</Text>
                    <Wrap>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                            <WrapItem>
                                <Link>
                                    <Tag>#danhbayvirus</Tag>
                                </Link>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </div>
        </section>
    );
}

export default Sidebar;
