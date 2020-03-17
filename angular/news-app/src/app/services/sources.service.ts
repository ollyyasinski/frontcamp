import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Source } from "../models/sources-model";

@Injectable()
export class SourcesService {
  sources$: Observable<Source[]>;
  selectedSource$: Observable<Source> = of({
    id: "abc-news",
    name: "ABC News"
  });

  addSources(sources$: Observable<Source[]>) {
    this.sources$ = sources$;
  }

  selecteSource(id: string): void {
    this.selectedSource$ = this.sources$.pipe(
      map(sources => sources.find(source => source.id === id))
    );
  }
}
