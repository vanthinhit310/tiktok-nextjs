import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode} icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} />;
};

export default DarkModeSwitch;
