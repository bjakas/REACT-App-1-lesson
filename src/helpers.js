import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

export function getCurrentDate() { // primjer exporta named funkcije
return dayjs().format("MMMM DD YYYY, HH:mm:ss");
}

export function getId() { // primjer exporta named funkcije
  return nanoid();
}

// export default getCurrentDate;  primjer def. exporta; u app.js smo importali i uključili pod proizvoljnim imenom x

// izaberemo na koji način ćemo exportat named ili default