import { BehaviorSubject } from "rxjs";

export interface IServerTick {
    serverTick: BehaviorSubject<null>;
}