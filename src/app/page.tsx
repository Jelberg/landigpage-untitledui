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
import QuestionList from "./components/question/list/QuestionList";
import IconWithTextList from "./components/question/list/IconWithTextList";
import Card from "./components/card/Card";

import {data as question} from "./mocks/question"
import {data as tools} from "./mocks/tools"
import {data as features} from "./mocks/feature"
import {data as collage} from "./mocks/collage"

export default function Home() {

  return (
    <div className="flex flex-col sm:px-20 md:px-20">
     <Header />
     {/*Main section */}
     <main className="flex flex-col justify-center items-center w-full">
     <section className="flex justify-center items-center flex-col align-middle md:rounded-2xl bg-purple-ui w-full py-20 md:py-40 px-3">
      <div className="flex flex-col gap-5 text-center align-middle ">
        <h1 className="text-white md:text-7xl">Grow your users.</h1>
        <h1 className="text-lilac md:text-7xl">Smarter.</h1>
        <p className="text-lilac"> Powerful, self-serve product and growth to help you convert, engage, and retain more users. Trusted by over 4,000 startups</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-x-5">
          <div className="col-span-1 md:col-span-3 w-full"><InputEmail /></div>
          <button className="col-span-1 md:col-span-1 w-full">Get started</button>
          <p className="text-white font-thin text-sm col-span-1 md:col-span-3">We care about your data in out <u>privacy policy</u></p>
        </div>
        
     </section>
     <Image className="drop-shadow-md w-auto h-auto -mt-20" alt="initial" src="/img/users-over-time.png" width={0} height={0} sizes="100vw"  />
    </main>
    {/*Section 2 : integrations*/}
    <section className="flex flex-col items-center text-center p-5 gap-5 my-10">
      <Pill text="Integrations"/>
      <h2>Get more value from your tools</h2>
      <p className="text-xl text-gray-500 align-center md:max-w-[60%]">Connect your tools, connect your teams. With over 100 app already avaliable in our directory, your teams favourite tools are just a click away.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
        <IconWithTextList data={tools}/>
      </div>
    </section>
    {/** Section 3: give us a shot */}
    <section>
        <Card coverRight="/img/group/5.png">
          <div className="grid gap-5">
              <h2 className="text-white">Give us a shot</h2>
              <p className="text-white text-xl font-thin">Join over 4,000+ startups already growing with Untitled</p>
              <div className="flex flex-col-reverse gap-5 mt-5 sm:flex-row md:flex-row py-5">
                <button className="text-black bg-white hover:text-white">Learn more</button>
                <button> Get started</button>
              </div>
            </div>
        </Card>
    </section>

    {/* Section 4: Features*/}
    <section className="flex flex-col items-center px-1 py-20 gap-7 text-center">
      <Pill text="Features"/>
      <h2>Cutting-edge features for advance analytics</h2>
      <p className="text-xl text-gray-500 md:max-w-[60%]"> Poweful, self-serve product and growth analytics to help you convert, engage, and retain more useres. Trusted by over 4,000 startups</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3" >
        <IconWithTextList data={features}/>
      </div>
    </section>
    
    {/* Section 5: Free trial*/}
    <section className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-2 sm:px-20 md:px-20 px-1 bg-gray-50 w-full py-5">
      <div className="flex flex-col gap-5">
        <h2>No long-term contracts.</h2>
        <h2>No catches.</h2>
        <p className="text-xl text-gray-500">Start your 30-day free trial today.</p>
        <div className="flex flex-col-reverse inverse gap-5 mt-5 sm:flex-row md:flex-row py-5">
              <button className="text-black bg-white hover:text-white">Learn more</button>
              <button> Get started</button>
            </div>
      </div>
      <div>
        <Collage images={collage}/>
      </div>
    </section>
    {/** Section 6: Fequently asked */}
    <section className="flex flex-col items-center py-10 sm:py-20 md:py-20 gap-5 mx-4 align-middle">
      <h2 className="text-center">Frequently asked questions</h2>
      <p className="text-xl text-gray-500 text-center">Everything you need to know about the product and billing.</p>
      <div className="w-full md:w-[70%] my-5">
      <QuestionList data={question} />
      </div>
    </section>
     {/* Section 7: Renee Welles*/}
     <section>
      <Card coverLeft="/img/renee-wells.png">
          <div className="flex gap-2 my-5">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
          <div className="grid gap-3">
            <p className="text-white text-2xl md:text-6xl">Love the simplicity of the service and the promt customet support. We cant imagine working witout it.</p>
            <p className="text-white text-xl font-bold mt-10">— Renee Wells</p>
            <p className="text-white"> Product Designer, Quotient</p>
          </div>
      </Card>
     </section>
    
    <FooterUI />
    </div>
  );
}
