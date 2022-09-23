import { Button, Flex, Img, Text, Link, useMediaQuery } from "@chakra-ui/react";
import fluxlogo from "../../public/flux-white-logo.svg";
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

const Footer = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      bgColor='#0A0E13'
      flexDirection={isMobileDevice ? "column" : undefined}
      justifyContent='center'
      py={20}
      px={isMobileDevice ? 10 : 20}
    >
      <Flex flexDirection='column'>
        <Link href='https://fluxui.webflow.io/' isExternal>
          <Img mb={5} w='120px' src={fluxlogo.src} />
        </Link>
        <Text color='rgba(255, 255, 255, 0.56)' fontSize='12px'>
          Flux is a decentralized Web3 cloud infrastructure
          <br /> comprised of user-operated, scalable and globally
          <br /> distributed computational nodes.
        </Text>
        <Flex flexDirection={"column"} mt={5}>
          <Flex>
            <Link href='https://twitter.com/RunOnFlux' isExternal mr={3}>
              <Img w='18px' src={twitter.src} />
            </Link>
            <Link href='https://discord.io/runonflux' isExternal mr={3}>
              <Img w='18px' src={discord.src} />
            </Link>
            <Link href='https://www.facebook.com/runonflux' isExternal mr={3}>
              <Img w='18px' src={facebook.src} />
            </Link>
            <Link
              href='https://bitcointalk.org/index.php?topic=2853688.0'
              isExternal
              mr={3}
            >
              <Img w='18px' src={bitcointalk.src} />
            </Link>
            <Link href='https://t.me/runonflux' isExternal mr={3}>
              <Img w='18px' src={telegram.src} />
            </Link>
            <Link href='https://github.com/RunOnFlux' isExternal mr={3}>
              <Img w='18px' src={github.src} />
            </Link>
            <Link
              href='https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw'
              isExternal
              mr={3}
            >
              <Img w='18px' src={youtube.src} />
            </Link>
          </Flex>
          <Flex mt={2}>
            <Link
              href='https://www.reddit.com/r/Flux_Official'
              isExternal
              mr={3}
            >
              <Img w='18px' src={reddit.src} />
            </Link>
            <Link href='https://fluxofficial.medium.com/' isExternal mr={3}>
              <Img w='18px' src={medium.src} />
            </Link>
            <Link
              href='https://www.linkedin.com/company/flux-official/mycompany/'
              isExternal
              mr={3}
            >
              <Img w='18px' src={linkedin.src} />
            </Link>
            <Link href='https://www.twitch.tv/runonflux' isExternal mr={3}>
              <Img w='18px' src={twitch.src} />
            </Link>
            <Link
              href='https://www.instagram.com/runonflux_official/'
              isExternal
              mr={3}
            >
              <Img w='18px' src={instagram.src} />
            </Link>
            <Link
              href='https://www.tiktok.com/@flux_runonflux'
              isExternal
              mr={3}
            >
              <Img w='18px' src={tiktok.src} />
            </Link>
            <Link visibility={"hidden"} mr={3}>
              <Img w='18px' src={youtube.src} />
            </Link>
          </Flex>
        </Flex>
        <Link
          href='mailto: info@runonflux.io?subject=Contact%20Flux!'
          isExternal
          _hover={{ textDecoration: "none" }}
          mb={2}
        >
          <Button
            w='200px'
            mt={5}
            fontSize='14px'
            color='rgba(255, 255, 255, 0.56)'
            bgColor='#171920'
            _hover={{ bgColor: "#171920" }}
          >
            Contact us!
          </Button>
        </Link>

        <Link
          _hover={{ textDecoration: "none" }}
          href='https://support.runonflux.io/'
        >
          <Button
            mt={2}
            w='200px'
            fontSize='14px'
            color='rgba(255, 255, 255, 0.56)'
            bgColor='#171920'
            _hover={{ bgColor: "#171920" }}
          >
            Support Center
          </Button>
        </Link>
      </Flex>
      <Flex mt={isMobileDevice ? 10 : undefined}>
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            ECOSYSTEM
          </Text>
          <Link
            href='https://fluxui.webflow.io/fluxos'
            isExternal
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              FluxOs
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/fluxos.html#dapps-section'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Apps
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/flux-nodes'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              FluxNodes
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/flux'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Flux
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/parallel'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Parallel Mining
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://zelcore.io/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Zelcore
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://home.runonflux.io/dashboard/overview'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Dashboard
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/xdao'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
        {/* <Flex flexDirection='column'></Flex>
        <Flex flexDirection='column'></Flex>
        <Flex flexDirection='column'></Flex> */}
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            DISCOVER
          </Text>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://runonflux.io/fluxlabs.html'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              FluxLabs
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxwhitepaper.app.runonflux.io/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Whitepaper
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/roadmap'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Roadmap
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/team'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Team
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://docs.runonflux.io/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Documentation
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/partners'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Partners
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://explorer.runonflux.io/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Block Explorer
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            visibility={"hidden"}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
          display={isMobileDevice ? "none" : undefined}
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            EXPLORE
          </Text>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://runonflux.io/fluxos.html#dapps-section'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              App
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://medium.com/zelinsights/zelnode-setup-the-easy-peasy-lemon-squeezy-way-fd89706ea03c'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Node
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/mining'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Miner
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://runonflux.io/flux.html#exchanges'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Buy Flux
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Parallel Mining
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Zelcore
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Dashboard
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
          display={isMobileDevice ? "none" : undefined}
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            COMMUNITY
          </Text>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxofficial.medium.com/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Blog
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://github.com/RunOnFlux'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Github
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://github.com/RunOnFlux/press'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Resources
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/careers'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Careers
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/bug-bounty-program'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Bug bounty
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Zelcore
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Dashboard
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
        mt={isMobileDevice ? 5 : undefined}
        display={!isMobileDevice ? "none" : undefined}
      >
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
          display={isMobileDevice ? "none" : undefined}
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            EXPLORE
          </Text>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://runonflux.io/fluxos.html#dapps-section'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              App
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://medium.com/zelinsights/zelnode-setup-the-easy-peasy-lemon-squeezy-way-fd89706ea03c'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Node
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/mining'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Miner
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://runonflux.io/flux.html#exchanges'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Buy Flux
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Parallel Mining
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Zelcore
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Dashboard
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
        <Flex
          color='rgba(255, 255, 255, 0.56)'
          fontWeight='bold'
          fontSize='13px'
          mx={8}
          flexDirection='column'
          display={isMobileDevice ? "none" : undefined}
        >
          <Text color='rgba(255, 255, 255, 0.9)' fontSize={"14px"} mb={5}>
            COMMUNITY
          </Text>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxofficial.medium.com/'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Blog
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://github.com/RunOnFlux'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Github
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://github.com/RunOnFlux/press'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Resources
            </Text>
          </Link>

          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/careers'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Careers
            </Text>
          </Link>
          <Link
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
            href='https://fluxui.webflow.io/bug-bounty-program'
            isExternal
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Bug bounty
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Zelcore
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              Dashboard
            </Text>
          </Link>
          <Link
            visibility={"hidden"}
            _hover={{
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
            }}
          >
            {" "}
            <Text _hover={{ color: "rgba(255, 255, 255, 0.9)" }} my={2}>
              XDAO
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
