import { Box, List, ListItem, Icon } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar-content">
                <Box w="100%">
                    <List spacing={3}>
                        <ListItem className="sidebar-item-hover">
                            <Link href="/">
                                <a>
                                    <Icon as={AiFillHome} mr={2} boxSize="1.4rem" /> For You
                                </a>
                            </Link>
                        </ListItem>
                        <ListItem className="sidebar-item-hover">
                            <Link href="/">
                                <a>
                                    <Icon as={FiUsers} mr={2} boxSize="1.4rem" /> Following
                                </a>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </div>
        </section>
    );
}

export default Sidebar;
