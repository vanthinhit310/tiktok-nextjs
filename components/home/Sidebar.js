import { Box, List, ListItem, Icon, Text, Button, Link, Flex, Spacer, Avatar, HStack, Wrap, WrapItem, Tag, Divider, TagLeftIcon } from "@chakra-ui/react";
import { AiFillHome, AiFillCheckCircle } from "react-icons/ai";
import { FiUsers, FiHash } from "react-icons/fi";
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
                    <Flex pb="15px">
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
                                <Link variant="account-badge">
                                    <HStack spacing="10px">
                                        <Box w="40px">
                                            <Avatar
                                                size="40px"
                                                name="Dan Abrahmov"
                                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ace3ef6a9607c43e027a7159dfbfd564.jpeg?x-expires=1635048000&x-signature=aeA0wM7UL52%2FOSJct%2Bkfqe%2FUsaE%3D"
                                            />
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm" className="account__name" fontWeight="semibold">
                                                yeah1.trending <Icon as={AiFillCheckCircle} w={4} h={4} color="green.300" />
                                            </Text>
                                            <Text fontSize="2xs">Yeah1 Trending</Text>
                                        </Box>
                                    </HStack>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider />
                <Box py="20px" w="100%">
                    <Text pb="15px" fontWeight="semibold" fontSize="xs">
                        Discover
                    </Text>
                    <Wrap>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                            <WrapItem key={i}>
                                <Link>
                                    <Tag variant="pills" fontSize="xs" fontWeight="normal">
                                        <TagLeftIcon boxSize="12px" as={FiHash} />
                                        danhbayvirus
                                    </Tag>
                                </Link>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
                <Divider />
                <Box w="100%" pt="20px" className="sidebar-button">
                    <Wrap>
                        <WrapItem>
                            <Link variant="footer-menu">About</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Newsroom</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Contact</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Careers</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">ByteDance</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">TikTok for Good</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Advertise</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Developers</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Transparency</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Help</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Safety</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Terms</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Privacy</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Creator Portal</Link>
                        </WrapItem>
                        <WrapItem>
                            <Link variant="footer-menu">Community Guidelines</Link>
                        </WrapItem>
                    </Wrap>
                </Box>
                <Box w="100%" p="10px 0 20px" className="copyright">
                    <Text fontSize="10px">© 2021 TikTok</Text>
                </Box>
            </div>
        </section>
    );
}

export default Sidebar;
