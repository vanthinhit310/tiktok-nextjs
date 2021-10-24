import { VStack, StackDivider, Box } from "@chakra-ui/react";
import _ from "lodash";

const FeedList = () => {
    return (
        <section className="feed__list">
            <VStack divider={<StackDivider />} spacing={4} align="stretch">
                {_.range(0, 25, 1).map(index => (
                    <Box key={index}>{index}</Box>
                ))}
            </VStack>
        </section>
    );
};
export default FeedList;
