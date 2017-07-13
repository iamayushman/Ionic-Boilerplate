import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { GoogleMap, GoogleMaps, LatLng, CameraPosition, GoogleMapsEvent  } from '@ionic-native/google-maps';
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {

  }

  ngAfterViewInit(){
    this.loadMap();
  }
  loadMap(){
    let element = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);
    let latLng= new LatLng(28.6108626,77.0276599);
    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      let position: CameraPosition={
        target:latLng,
        zoom:15,
        tilt:30
      }
      map.moveCamera(position)
    });
  }
}
