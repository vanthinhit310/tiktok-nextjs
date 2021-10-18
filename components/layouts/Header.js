import React, { PureComponent } from "react";
import { Grid, Box, Container, Image, Input, InputGroup, IconButton, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

class Header extends PureComponent {
    render() {
        return (
            <section className="header-wrapper">
                <Container>
                    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap="15px">
                        <Box w="100%">
                            <Link href="/">
                                <a>
                                    <Image
                                        htmlWidth={118}
                                        src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
                                        alt="Logo"
                                    />
                                </a>
                            </Link>
                        </Box>
                        <Box w="100%">
                            <InputGroup className="search-group">
                                <Input type="tel" placeholder="phone number" />
                                <IconButton aria-label="Search database" icon={<SearchIcon />} />
                            </InputGroup>
                        </Box>
                        <Box w="100%">
                            <Flex>
                                <Button>Upload</Button>
                                <Box>
                                    <Button mr="4">Log in</Button>
                                    <Button>
                                        <Icon as={BsThreeDotsVertical} />
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>
                    </Grid>
                </Container>
            </section>
        );
    }
}

export default Header;
