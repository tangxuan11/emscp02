import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface NavbarDataObject {
  sidebarCollapsed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavBarDataService {
  private navbarDataSource : BehaviorSubject<NavbarDataObject> =
    new BehaviorSubject<NavbarDataObject>({sidebarCollapsed: false});
  currentNavbarData : Observable<NavbarDataObject> =
    this.navbarDataSource.asObservable();

  constructor() { }

  collapseSidebar(collapse: boolean) : void {
      let dataObject : NavbarDataObject = {
          sidebarCollapsed: collapse
      }
      this.navbarDataSource.next(dataObject);
  }
}
