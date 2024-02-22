'use client'
import { IIconWithText } from "../components/inconWithText/IconWithText"
import LightningIcon from "../assets/icons/LightningIcon"
import ChatBubbleIcon from "../assets/icons/ChatBubbleIcon"
import ArrowSquareOutIcon from "../assets/icons/ArrowSquareOutIcon"

export const data :IIconWithText[] = [{
    "title": "Share team inboxes",
    "text": "Work faster and smarter by integration directly with the Tool, right in the app",
    "icon": <ChatBubbleIcon />,
    "type": "icon",
    "textLink": "Learn more"
},
{
    "title": "Deliver instant answers",
    "text": "Work faster and smarter by integration directly with the Tool, right in the app",
    "icon": <LightningIcon />,
    "type": "icon",
    "textLink": "Learn more",
},
{
    "title": "Manage your team with reports",
    "text": "Work faster and smarter by integration directly with the Tool, right in the app",
    "icon": <ArrowSquareOutIcon />,
    "type": "icon",
    "textLink": "Learn more",
}]
