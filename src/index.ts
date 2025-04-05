import * as dotenv from "dotenv";
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

dotenv.config();

let model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0
});

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

let res = await model.invoke(messages);

console.log(res);