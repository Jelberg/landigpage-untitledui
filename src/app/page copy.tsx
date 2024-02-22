import Image from "next/image";
import QuestionIcon from "./assets/icons/QuestionIcon";
import ArrowIcon from "./assets/icons/ArrowIcon";
import PlusCircleIcon from "./assets/icons/PlusCircleIcon";
import MinusCircleIcon from "./assets/icons/MinusCircleIcon";
import LightningIcon from "./assets/icons/LightningIcon";
import ArrowSquareOutIcon from "./assets/icons/ArrowSquareOutIcon";
import ChatBubbleIcon from "./assets/icons/ChatBubbleIcon";
import StarIcon from "./assets/icons/StarIcon";
import InputEmail from "./components/input/email/InputEmail";
import Pill from "./components/pills/Pill";
import Link from "./components/link/Link";
import Avatar from "./components/avatar/Avatar";
import IconWithText from "./components/inconWithText/IconWithText";
import QuestionContent from "./components/question/content/QuestionContent";
import Collage from "./components/collage/Collage";
import Header from "./components/layouts/Header";
import FooterUI from "./components/layouts/FooterUI";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Header />
      <h1 className="text-purple-ui">H1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptas eius corrupti. Rerum laborum, corrupti at et non recusandae architecto nostrum, suscipit harum veritatis dolores aut enim commodi fugit soluta!</h1>
      <h2 className="text-lightpurple-ui">H2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid expedita est quaerat voluptate, cupiditate consequuntur illo repellat perferendis maiores neque consectetur? Amet quibusdam, non error aliquam incidunt molestias libero beatae.</h2>
      <h3>H3 Lorem ipsum dolor sit amet con </h3>
      <h6>H6 Lorem ipsum dolor sit amet con </h6>
      <p>P Lorem ipsum dolor sit amet con </p>
      <QuestionIcon />
      <ArrowIcon />
      <PlusCircleIcon />
      <MinusCircleIcon /> 
      <ChatBubbleIcon />
      <LightningIcon />
      <ArrowSquareOutIcon /> 
      <StarIcon />
      <a>Holaaa</a>
      <button>Holaaa</button>
      <InputEmail />
    <Pill />
    <Link />
    <Avatar type="img" width={70} height={70}/>
    <Avatar type="icon" width={70} height={70} icon={<LightningIcon width={40} height={40}/>}/>
    <IconWithText type="img" width={100} height={100}/>
    <QuestionContent quetion="Is there a free trial available?" summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum debitis eaque vitae deserunt labore consequuntur veritatis incidunt blanditiis sunt magnam, vel distinctio quibusdam officiis ipsa, neque sint laborum eos optio." />
    <Collage />
    <FooterUI />
    </main>
  );
}