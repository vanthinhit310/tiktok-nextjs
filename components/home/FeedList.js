import { VStack, StackDivider, Box, HStack, Flex, Avatar } from "@chakra-ui/react";
import _ from "lodash";

const FeedList = () => {
    return (
        <section className="feed__list">
            <VStack divider={<StackDivider />} spacing={4} align="stretch">
                {_.range(0, 25, 1).map(index => (
                    <div key={index} className="feed__item">
                        <HStack spacing="10px" align="flex-start">
                            <Box width="50px" className="feed__item__avatar">
                                <Avatar size="50px" name="Dan Abrahmov" src="https://bit.ly/ryan-florence" />
                            </Box>
                            <Box w="100%">
                                <VStack>
                                    <Box></Box>
                                    <Box className="feed__item__video"></Box>
                                </VStack>
                            </Box>
                        </HStack>
                    </div>
                ))}
            </VStack>
        </section>
    );
};
export default FeedList;
