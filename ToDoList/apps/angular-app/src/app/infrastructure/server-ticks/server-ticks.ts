import { pipe, take, tap } from "rxjs";
import { IServerTick } from "../../presentation/components/interfaces/server-tick-component";

export function tickServerFetch(this: IServerTick) {
    return pipe(
        take(1),
        tap(() => {
            this.serverTick.next(null);
        })
    )
}
