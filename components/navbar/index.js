import {
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
  useMediaQuery,
  Alert,
} from "@chakra-ui/react";
import fluxlogo from "../../public/flux-logo.svg";
import { ChevronDownIcon, ChevronUpIcon, WarningIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = ({ hamburgerClicked, setHamburgerClicked }) => {
  const [visibleItem, setVisibleItem] = useState("");
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      {isMobileDevice ? (
        <MobileNav
          setHamburgerClicked={setHamburgerClicked}
          hamburgerClicked={hamburgerClicked}
        />
      ) : (
        <Flex alignItems='center' bgColor='#fff' h='14' py={10} px={10}>
          <Image mr={20} w='100px' src={fluxlogo.src} />
          {/* <Spacer /> */}
          <Flex color='black'>
            <Flex
              onMouseEnter={() => setVisibleItem("ecosystem")}
              onMouseLeave={() => setVisibleItem("")}
              flexDirection='column'
              mx={5}
              zIndex={99}
            >
              <Flex
                fontWeight={"500"}
                alignItems={"center"}
                cursor={"pointer"}
                // mt={5}
              >
                <Text>Ecosystem</Text>
                <ChevronDownIcon ml={2} />
              </Flex>
              <Flex
                borderRadius={"12px"}
                position={"absolute"}
                top={12}
                py={15}
                visibility={visibleItem === "ecosystem" ? "visible" : "hidden"}
                flexDirection={"column"}
                backgroundColor={"#fff"}
              >
                <Link
                  href='https://fluxui.webflow.io/fluxos'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      FluxOS
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Fluxs revolutionary second-layer operating
                      <br /> system that is the heart of Flux.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/fluxos.html#dapps-section'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Apps
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Explore some of the applications running on
                      <br /> Flux.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/flux-nodes'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      FluxNodes
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Learn more about the independently run
                      <br /> FluxNodes that is power the Flux network.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/flux'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Flux
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Our Proof-of-Work cryptocurrency that powers
                      <br /> the Flux ecosystem.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/parallel'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Parallel Mining
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Flux assets can be mined on other blockchains
                      <br /> that are interchangeable with the main chain.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://zelcore.io/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Zelcore
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      A multi-asset, multi-platform wallet with a long
                      <br /> list of market leading features
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://home.runonflux.io/dashboard/overview'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Dashboard
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Explore the latest stats on the Flux network
                      <br /> via the Flux dashboard
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>

            <Flex
              onMouseEnter={() => setVisibleItem("discover")}
              onMouseLeave={() => setVisibleItem("")}
              flexDirection='column'
              mx={5}
              zIndex={99}
            >
              <Flex
                fontWeight={"500"}
                alignItems={"center"}
                cursor={"pointer"}
                // mt={5}
              >
                <Text>Discover</Text>
                <ChevronDownIcon ml={2} />
              </Flex>
              <Flex
                borderRadius={"12px"}
                position={"absolute"}
                top={12}
                py={15}
                visibility={visibleItem === "discover" ? "visible" : "hidden"}
                flexDirection={"column"}
                backgroundColor={"#fff"}
              >
                <Link
                  href='https://runonflux.io/fluxlabs.html'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      FluxLabs
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      An incubation and acceleration project <br /> for
                      blockchain and technology-based start-ups.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxwhitepaper.app.runonflux.io/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Whitepaper
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Read the Flux whitepaper and discover the scope
                      <br /> of the project.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/roadmap'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Roadmap
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Check out the Flux roadmap and our plans for
                      <br /> this year and beyond.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/team'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Team
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Meet the members of the fully distributed Flux <br />{" "}
                      team.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/partners'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Partners
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Collaboration is at the heart of Flux and our
                      <br /> partners are key to that.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://docs.runonflux.io/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Documentation
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Read the Flux docs and get building on Flux <br /> today.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://explorer.runonflux.io/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Block Explorer
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      View blocks mined, statistics, pools, nodes and <br />{" "}
                      status of the network.
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
            <Flex
              onMouseEnter={() => setVisibleItem("explore")}
              onMouseLeave={() => setVisibleItem("")}
              flexDirection='column'
              mx={5}
              zIndex={99}
            >
              <Flex
                fontWeight={"500"}
                alignItems={"center"}
                cursor={"pointer"}
                // mt={5}
              >
                <Text>Explore</Text>
                <ChevronDownIcon ml={2} />
              </Flex>
              <Flex
                borderRadius={"12px"}
                position={"absolute"}
                top={12}
                py={15}
                visibility={visibleItem === "explore" ? "visible" : "hidden"}
                flexDirection={"column"}
                backgroundColor={"#fff"}
              >
                <Link
                  href='https://runonflux.io/fluxos.html#dapps-section'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      App
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Discover how to launch an app on the Flux <br />
                      network.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://medium.com/zelinsights/zelnode-setup-the-easy-peasy-lemon-squeezy-way-fd89706ea03c'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Node
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Become a FluxNode operator with our easy to <br />
                      follow guides.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/mining'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Miner
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Learn how to mine Flux with your GPU and what <br /> pools
                      to join.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://runonflux.io/flux.html#exchanges'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Buy Flux
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Learn how to trade, buy, swap or stake Flux.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://gotflux.store/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Flux Store
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Buy Flux gear designed just for you.
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
            <Flex
              onMouseEnter={() => setVisibleItem("community")}
              onMouseLeave={() => setVisibleItem("")}
              flexDirection='column'
              mx={5}
              zIndex={99}
            >
              <Flex
                fontWeight={"500"}
                alignItems={"center"}
                cursor={"pointer"}
                // mt={5}
              >
                <Text>Community</Text>
                <ChevronDownIcon ml={2} />
              </Flex>
              <Flex
                borderRadius={"12px"}
                position={"absolute"}
                top={12}
                py={15}
                visibility={visibleItem === "community" ? "visible" : "hidden"}
                flexDirection={"column"}
                backgroundColor={"#fff"}
              >
                <Link
                  href='https://fluxofficial.medium.com/'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Blog
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Discover all the latest news on the official Flux <br />{" "}
                      blog on Medium.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://github.com/RunOnFlux'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Github
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Explore the code that powers Flux in our Github <br />{" "}
                      repositories.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://github.com/RunOnFlux/press'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Resources
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Our press kit and other related resources.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/flux-social'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Social
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Flux social media account
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/careers'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Careers
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      See current open positions and come to work <br /> with
                      Flux.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/bug-bounty-program'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Bug bounty
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Get rewarded for finding bugs and exploits.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://fluxui.webflow.io/donate'
                  isExternal
                  _hover={{ textDecoration: "none", textColor: "black" }}
                >
                  <Flex
                    _hover={{ bgColor: "#eee" }}
                    cursor={"pointer"}
                    px={6}
                    py={3}
                    flexDirection={"column"}
                  >
                    <Text
                      mb={2}
                      fontWeight={"600"}
                      fontSize={"13px"}
                      color='black'
                    >
                      Donate
                    </Text>
                    <Text lineHeight={"1.8"} fontSize={"12px"}>
                      Help us grow the Flux project and contribute to the <br />{" "}
                      foundation funds.
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href='https://support.runonflux.io/'
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  px={6}
                >
                  <Flex
                    mb={2}
                    borderRadius='8px'
                    border='1px'
                    justifyContent='center'
                    _hover={{
                      bgColor: "#39CAA5",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    <Button bg='transparent'>Support</Button>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Spacer />
          <Flex alignItems='center' color='black'>
            <Link href='https://gotflux.store/cart' isExternal>
              <Icon boxSize={6} mx={2} as={BsCart2} />
            </Link>

            <Link
              _hover={{ textDecoration: "none" }}
              href='https://runonflux.io/deploy-dapp.html'
              isExternal
            >
              <Flex
                cursor={"pointer"}
                px={5}
                py={0.5}
                borderRadius='6px'
                border='1px'
                mx={4}
                fontWeight={"500"}
                fontSize={"14px"}
                color={"#39CAA5"}
                _hover={{ bgColor: "#39CAA5", color: "#fff" }}
              >
                Launch Now!
              </Flex>
            </Link>

            <Link
              _hover={{ textDecoration: "none" }}
              href='https://zelcore.io/'
              isExternal
            >
              <Flex
                py={1}
                cursor={"pointer"}
                color='#fff'
                fontWeight={"500"}
                fontSize={"14px"}
                borderRadius={"6px"}
                px={5}
                bgImage={"linear-gradient(270deg, #871eff, #4c80ee)"}
                border='1px'
              >
                Download Zelcore
              </Flex>
            </Link>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Navbar;
