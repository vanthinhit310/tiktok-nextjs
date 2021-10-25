import { VStack, StackDivider, Box, HStack, Flex, Avatar, Text, Icon, Button } from "@chakra-ui/react";
import _ from "lodash";
import ReactPlayer from "react-player/lazy";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";

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
                                <VStack alignItems="flex-start" spacing={5}>
                                    <Box w="100%">
                                        <Flex>
                                            <Box>
                                                <VStack alignItems="flex-start" spacing={3}>
                                                    <Box>
                                                        <HStack spacing={2}>
                                                            <Text fontSize="sm" fontWeight="semibold">
                                                                vtv24news
                                                            </Text>
                                                            <Icon as={AiFillCheckCircle} w={5} h={5} color="green.300" />
                                                            <Text fontSize="2xs">VTV24 . 10-6</Text>
                                                        </HStack>
                                                    </Box>
                                                    <Box className="post-cotent">
                                                        <Text fontSize="sm">
                                                            Thay vì gục ngã trước nghịch cảnh, Phạm Tuấn Hưng đã chọn cách dũng cảm đương đầu để được sống trọn
                                                            với đam mê của bản thân mình #vtv24 #thethaomoingay
                                                        </Text>
                                                    </Box>
                                                    <Box className="post-music">
                                                        <Text fontSize="xs" fontWeight="semibold">
                                                            <Icon as={BsMusicNoteBeamed} w={4} h={4} /> original sound - VTV24
                                                        </Text>
                                                    </Box>
                                                </VStack>
                                            </Box>
                                            <Box ml={10}>
                                                <div className="follow-button">
                                                    <Button variant="pink-outline">Follow</Button>
                                                </div>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box className="feed__item__video">
                                        <ReactPlayer
                                            style={{ borderRadius: "6px", overflow: "hidden" }}
                                            className="feed__item__player"
                                            url="/videos/demo.mp4"
                                            controls={true}
                                            muted={true}
                                            loop={true}
                                            playing={false}
                                        />
                                    </Box>
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
