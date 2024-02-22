'use client'

import IconWithText from "../../inconWithText/IconWithText";
import { IIconWithText } from "../../inconWithText/IconWithText";

interface IIconWithTextList {
    data : IIconWithText[];
}

export default function IconWithTextList({data}: IIconWithTextList) {
    return data.map((tool, index) => (
        <IconWithText key={index} icon={tool.icon} textLink={tool.textLink} type={tool.type} width={60} height={60} src={tool.src} title={tool.title} text={tool.text} />
      ))
}