import { slitherClient } from "./lib/slither-client.js";

const client = new slitherClient()
client.connect('ws://209.58.183.136:444/slither')