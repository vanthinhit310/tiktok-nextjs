import React, { PureComponent } from "react";
import {
    Grid,
    Box,
    Container,
    Image,
    Input,
    InputGroup,
    IconButton,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider
} from "@chakra-ui/react";
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
                                <Input type="tel" placeholder="search accounts and videos" />
                                <IconButton aria-label="Search database" icon={<SearchIcon />} />
                            </InputGroup>
                        </Box>
                        <Box w="100%">
                            <Flex justify="end">
                                <Button variant="white-button" className="button">
                                    Upload
                                </Button>
                                <Button variant="pink-button" className="button">
                                    Log in
                                </Button>
                                <Menu isLazy placement="bottom-end" id="1">
                                    <MenuButton variant="white-button" as={Button}>
                                        <Icon as={BsThreeDotsVertical} />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>English</MenuItem>
                                        <MenuItem>Feedback and help</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Box>
                    </Grid>
                </Container>
            </section>
        );
    }
}

export default Header;
