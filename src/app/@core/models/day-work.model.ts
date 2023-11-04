import {Entity} from "./entity.model";
import {Timestamp} from "firebase/firestore";

export type DayWorkModel = Entity & {
  date: Timestamp
}
