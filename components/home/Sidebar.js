import { Box, List, ListItem, Icon, Text, Button, Link, Flex, Spacer, Avatar, HStack, Wrap, WrapItem, Tag, Divider } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import NextLink from "next/link";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar-content">
                <Box w="100%" py="20px" className="sidebar-mainmenu box-padding">
                    <List>
                        <ListItem className="sidebar-item-hover">
                            <NextLink href="/">
                                <Link variant="main-sidebar" fontWeight="bold" fontSize="lg">
                                    <Icon as={AiFillHome} mr={2} boxSize="1.4rem" /> For You
                                </Link>
                            </NextLink>
                        </ListItem>
                        <ListItem className="sidebar-item-hover">
                            <NextLink href="/">
                                <Link variant="main-sidebar" fontWeight="bold" fontSize="lg">
                                    <Icon as={FiUsers} mr={2} boxSize="1.4rem" /> Following
                                </Link>
                            </NextLink>
                        </ListItem>
                    </List>
                </Box>
                <Divider />
                <Box w="100%" py="20px" className="sidebar-login box-padding">
                    <Text fontSize="sm" mb={4}>
                        Log in to follow creators, like videos, and view comments.
                    </Text>
                    <Button width="100%" variant="pink-outline" size="lg">
                        Log in
                    </Button>
                </Box>
                <Divider />
                <Box py="20px" w="100%">
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
                <Divider />
                <Box py="20px" w="100%">
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
                <Divider />
                <Box w="100%" py="20px" className="sidebar-button">
                    <Wrap>
                        <WrapItem>
                            <Link>About</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Newsroom</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Contact</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Careers</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>ByteDance</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>TikTok for Good</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Advertise</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Developers</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Transparency</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Help</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Safety</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Terms</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Privacy</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Creator Portal</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link>Community Guidelines</Link>
                        </WrapItem>
                    </Wrap>
                </Box>
                <Box w="100%" className="copyright">
                    <Text>© 2021 TikTok</Text>
                </Box>
            </div>
        </section>
    );
}

export default Sidebar;
