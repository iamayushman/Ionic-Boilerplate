import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

dashboardPage = DashboardPage;
mapPage = MapPage;
listPage = ListPage;
  

}
