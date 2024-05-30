import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { Observable } from "rxjs/internal/Observable"

export type PeopleResult = {
  results:
  [
    { name: string }
  ]
}

export const getAllPeople = (): Observable<PeopleResult> => {
  return inject(HttpClient).get<PeopleResult>('https://swapi.dev/api/people');
}
