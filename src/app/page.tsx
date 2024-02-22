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
    <div className="flex min-h-screen flex-col items-center justify-between px-1 sm:px-24 md:px-24">
     <Header />
     {/*Main section */}
     <main className="flex flex-col justify-center items-center w-full">
     <section className="flex justify-center items-center flex-col align-middle rounded-2xl bg-purple-ui w-full py-52">
        <h1 className="text-white">Grow your users.</h1>
        <h1 className="text-lilac">Smarter.</h1>
        <p className="text-lilac"> Powerful, self-serve product and growth to help you convert, engage, and retain more users. Trusted by over 4,000 startups</p>
        <div className="flex gap-5">
          <InputEmail />
          <button className="w-full">Get started</button>
        </div>
        <p className="text-white font-thin text-sm">We care about your data in out <u>privacy policy</u></p>
     </section>
     <Image className="drop-shadow-md" alt="initial" src="/img/users-over-time.png" width={0} height={0} sizes="100vw" style={{width:"40%", height:"auto", marginTop:"-130px"}} />
    </main>
    {/*Section 2 : integrations*/}
    <section className="flex flex-col items-center p-5 gap-5">
      <Pill text="Integrations"/>
      <h2>Get more value from your tools</h2>
      <p className="text-xl text-gray-500 align-center">Connect your tools, connect your teams. With over 100 app already avaliable in our directory, your team's favourite tools are just a click away.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
        <IconWithText type="img" width={60} height={60} />
        <IconWithText type="img" width={60} height={60} src="/imgTools/slack.png" title="Slack integration" />
        <IconWithText type="img" width={60} height={60} src="/imgTools/drive.png" title="Google Drive integration"/>
        <IconWithText type="img" width={60} height={60} src="/imgTools/intercom.png" title="Intercom integration"/>
        <IconWithText type="img" width={60} height={60} src="/imgTools/jira.png" title="Jira integration"/>
        <IconWithText type="img" width={60} height={60} src="/imgTools/dropbox.png" title="Dropbox integration"/>
      </div>
    </section>
    {/** Section 3: give us a shot */}
    <section className="bg-purple-ui grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 rounded-2xl shadow-xl items-center">
    
        <div className="col-start-1 col-span-3 py-20 px-3 sm:py-24 sm:px-20 md:py-24 md:px-20"> 
          <div className="grid gap-5">
            <h2 className="text-white">Give us a shot</h2>
            <p className="text-white text-xl font-thin">Join over 4,000+ startups already growing with Untitled</p>
            <div className="flex gap-5 mt-5">
              <button className="text-black bg-white">Learn more</button>
              <button> Get started</button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
        <Image alt="" src="/img/group/5.png" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}/>
        </div>
    </section>
    {/* Section 4: Features*/}
    <section className="flex flex-col items-center px-1 py-10 gap-7">
      <Pill text="Features"/>
      <h2>Cutting-edge features for advance analytics</h2>
      <p className="text-xl text-gray-500"> Poweful, self-serve product and growth analytics to help you convert, engage, and retain more useres. Trusted by over 4,000 startups</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3" >
        <IconWithText type="icon" width={50} height={50} title="Share team inboxes" textLink="Learn more" icon={<ChatBubbleIcon />}/>
        <IconWithText type="icon" width={50} height={50} title="Deliver instant answers" textLink="Learn more" icon={<LightningIcon />}/>
        <IconWithText type="icon" width={50} height={50} title="Manage your team with reports" textLink="Learn more" icon={<ArrowSquareOutIcon />}/>
      </div>
    </section>
    <FooterUI />
    </div>
  );
}
