import * as dayjs from "dayjs";

export default function getCurrentDate() { 
return dayjs().format("MMMM DD YYYY, HH:mm:ss");
}