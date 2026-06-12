import { Queue } from "bullmq";
import redis from "../config/redis";

export const scanQueue =
 new Queue(
  "security-scan",
  {
   connection: redis
  }
 );
