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
import ArrowIcons from "./ArrowIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <ArrowIcons />
    </main>
  );
}
