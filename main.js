import { HashMap } from "./src/hash.js";

const hash = new HashMap();
hash.set("New Key", "New Sock");
hash.set("Change", "Ghosteers");
hash.set("Socker", "Value");
hash.set("Some Password?", "Now");
hash.set("Some Change in the Range!?", "Now");

console.log(hash.buckets);
console.log(hash.keys());
console.log(hash.values());
console.log(hash.entries());
