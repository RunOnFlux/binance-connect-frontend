import fluxlogo from "../../public/flux-logo.svg";
import {
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  Link,
  Img,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";

import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import facebook from "../../assets/facebook.png";
import bitcointalk from "../../assets/bitcointalk.png";
import telegram from "../../assets/telegram.png";
import github from "../../assets/github.png";
import youtube from "../../assets/youtube.png";
import reddit from "../../assets/reddit.png";
import medium from "../../assets/medium.png";
import linkedin from "../../assets/linkedin.svg";
import twitch from "../../assets/twitch.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import zelcore from "../../assets/zelcore.png";
import playstore from "../../assets/play-store.svg";
import appstore from "../../assets/app-store.svg";
import { Collapse } from "@chakra-ui/react";
import { useState } from "react";

const MobileNav = ({ setHamburgerClicked, hamburgerClicked }) => {
  const [visible, setVisible] = useState("");

  return (
    <Flex color='black' bgColor={"#ffffff"} flexDirection={"column"}>
      <Flex
        position={"fixed"}
        w='100%'
        zIndex={2}
        top={0}
        bgColor={"#ffffff"}
        py={5}
        alignItems='center'
        px={5}
        justifyContent='space-between'
      >
        <Image w='100px' src={fluxlogo.src} alt="img" />
        <Flex>
          <Icon color='black' mr={5} boxSize={6} as={BsCart2} />
          <HamburgerIcon
            onClick={() => {
              if (hamburgerClicked) {
                setHamburgerClicked(false);
              } else {
                setHamburgerClicked(true);
              }
            }}
            color='#4c80ee'
            boxSize={6}
          />
        </Flex>
      </Flex>
      <Collapse in={hamburgerClicked} animateOpacity>
        <Flex
          // onClick={() => {
          //   if (hamburgerClicked) {
          //     setHamburgerClicked(false);
          //   } else {
          //     setHamburgerClicked(true);
          //   }
          // }}
          mt={20}
          flexDirection={"column"}
          bgColor={"#ffffff"}
        >
          <Flex flexDirection={"column"}>
            <Flex
              onClick={() => {
                if (visible === "ecosystem") {
                  setVisible("");
                } else {
                  setVisible("ecosystem");
                }
              }}
              cursor={"pointer"}
              alignItems={"center"}
              py={10}
              px={10}
            >
              <Text fontWeight={"600"} mr={5} color='black'>
                Ecosystem
              </Text>
              <ChevronDownIcon color='black' />
            </Flex>
            <Collapse in={visible === "ecosystem"} animateOpacity>
              <Flex
                borderRadius={"12px"}
                px={10}
                // visibility={visibleItem === "ecosystem" ? "visible" : "hidden"}
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
            </Collapse>
            <Divider />
            <Flex
              onClick={() => {
                if (visible === "discover") {
                  setVisible("");
                } else {
                  setVisible("discover");
                }
              }}
              cursor={"pointer"}
              alignItems={"center"}
              py={10}
              px={10}
            >
              <Text fontWeight={"600"} mr={5} color='black'>
                Discover
              </Text>
              <ChevronDownIcon color='black' />
            </Flex>
            <Collapse in={visible === "discover"} animateOpacity>
              <Flex
                borderRadius={"12px"}
                // position={"absolute"}
                // top={14}
                px={10}
                // visibility={visibleItem === "discover" ? "visible" : "hidden"}
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
            </Collapse>
            <Flex
              onClick={() => {
                if (visible === "explore") {
                  setVisible("");
                } else {
                  setVisible("explore");
                }
              }}
              cursor={"pointer"}
              alignItems={"center"}
              py={10}
              px={10}
            >
              <Text fontWeight={"600"} mr={5} color='black'>
                Explore
              </Text>
              <ChevronDownIcon color='black' />
            </Flex>
            <Collapse in={visible === "explore"} animateOpacity>
              <Flex
                borderRadius={"12px"}
                px={10}
                // position={"absolute"}
                // top={14}
                // visibility={visibleItem === "explore" ? "visible" : "hidden"}
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
            </Collapse>
            <Flex
              onClick={() => {
                if (visible === "community") {
                  setVisible("");
                } else {
                  setVisible("community");
                }
              }}
              cursor={"pointer"}
              alignItems={"center"}
              py={10}
              px={10}
            >
              <Text fontWeight={"600"} mr={5} color='black'>
                Community
              </Text>
              <ChevronDownIcon color='black' />
            </Flex>
            <Collapse in={visible === "community"} animateOpacity>
              <Flex
                borderRadius={"12px"}
                px={10}
                // position={"absolute"}
                // top={14}
                // visibility={visibleItem === "community" ? "visible" : "hidden"}
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
            </Collapse>
          </Flex>
          <Text mt={5} mb={2} fontWeight={"600"} textAlign={"center"}>
            Flux Socials
          </Text>
          <Flex px={10} flexDirection={"column"} mt={5}>
            <Flex mt={5} justifyContent={"space-between"}>
              <Link href='https://twitter.com/RunOnFlux' isExternal>
                <Img w='18px' src={twitter.src} />
              </Link>
              <Link href='https://discord.gg/runonflux' isExternal>
                <Img w='18px' src={discord.src} />
              </Link>
              <Link href='https://www.facebook.com/runonflux' isExternal>
                <Img w='18px' src={facebook.src} />
              </Link>
              <Link
                href='https://bitcointalk.org/index.php?topic=2853688.0'
                isExternal
              >
                <Img w='18px' src={bitcointalk.src} />
              </Link>
            </Flex>

            <Flex mt={5} justifyContent={"space-between"}>
              <Link href='https://t.me/runonflux' isExternal>
                <Img w='18px' src={telegram.src} />
              </Link>
              <Link href='https://github.com/RunOnFlux' isExternal>
                <Img w='18px' src={github.src} />
              </Link>
              <Link
                href='https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw'
                isExternal
              >
                <Img w='18px' src={youtube.src} />
              </Link>
              <Link href='https://www.reddit.com/r/Flux_Official' isExternal>
                <Img w='18px' src={reddit.src} />
              </Link>
            </Flex>
            <Flex mt={5} justifyContent={"space-between"}>
              <Link href='https://fluxofficial.medium.com/' isExternal>
                <Img w='18px' src={medium.src} />
              </Link>
              <Link
                href='https://www.linkedin.com/company/flux-official/mycompany/'
                isExternal
              >
                <Img w='18px' src={linkedin.src} />
              </Link>
              <Link href='https://www.twitch.tv/runonflux' isExternal>
                <Img w='18px' src={twitch.src} />
              </Link>
              <Link
                href='https://www.instagram.com/runonflux_official/'
                isExternal
              >
                <Img w='18px' src={instagram.src} />
              </Link>
            </Flex>
            <Link href='https://www.tiktok.com/@flux_runonflux' isExternal>
              <Img w='18px' src={tiktok.src} />
            </Link>
          </Flex>
        </Flex>

        <Flex flexDirection={"column"} mt={10} alignItems={"center"}>
          <Img w='150px' src={zelcore.src} />
          <Text
            mt={5}
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={"14px"}
          >
            Download multi asset <br /> crypto wallet
          </Text>
        </Flex>
        <Flex mb={5} mt={5} alignItems={"center"} justifyContent={"center"}>
          <Img w='150px' mr={6} src={appstore.src} />
          <Img w='150px' src={playstore.src} />
        </Flex>
      </Collapse>
    </Flex>
  );
};

export default MobileNav;
