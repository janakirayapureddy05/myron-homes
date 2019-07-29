import { Component, OnInit } from '@angular/core';
import { PropReq } from '../common/model/property';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { UserProfile } from '../common/model/userclass';
import { MapsAPILoader } from '@agm/core';
declare var google: any;


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  geocoder: any;
  lat: number;
  lng: number;
  propId: any;
  constructor(public httpService: HttpService,
              public commonService: CommonService,
              public mapsApiLoader: MapsAPILoader,
  ) {
    this.mapsApiLoader = mapsApiLoader;

    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }
  display = false;
  addPropReq: PropReq = new PropReq();
  uploadedImages: File[] = [];
  uploadedBroucher: File;
  uploadedLayout: File;
  compProfile: UserProfile;
  amenities = ['Car Parking', 'LIFT', '24/7 Water Supply', 'Fire Fighting Systems',
    'Gymnasium', 'Club House', 'Childrens Play Area', 'Garden/Park', 'Street Lights'];
  selAmenities = [];
  uploadSuccImgs: File[] = [];
  uploadSuccBrou: File;
  uploadSuccLay: File;

  ngOnInit() {
    this.compProfile = this.commonService.userProfile;
  }

  UploadFiles(uploadfile: any, name: string) {
    let files: File[] = [];
    if (Array.isArray(uploadfile)) {
      files = uploadfile;
    } else {
      files.push(uploadfile);
    }
    this.httpService.uploadFile(files, this.addPropReq.companyId, this.propId, name).subscribe((data: any) => {
      if (name === 'img') {
        this.uploadSuccImgs = this.uploadedImages;
        this.uploadedImages = [];
        // msg
      } else if (name === 'layout') {
        this.uploadSuccLay = this.uploadedLayout;
        this.uploadedLayout = null;
        // msg
      } else {
        this.uploadSuccBrou = this.uploadedBroucher;
        this.uploadedBroucher = null;
        // msg
      }
    });
  }

  AddProperty() {
    this.display = true;
    this.addPropReq.companyId = this.compProfile.companyId;
    this.selAmenities.forEach(amnty => {
      if (this.addPropReq.amenities) {
        this.addPropReq.amenities = this.addPropReq.amenities + ',' + amnty;
      } else {
        this.addPropReq.amenities = amnty;
      }
    });
    this.getLatitLong(this.addPropReq.location);
    this.httpService.addProperty(this.addPropReq).subscribe((data: any) => {
      this.propId = data.propId;
      this.display = true;
      // show message
    });
  }

  getLatitLong(location) {
    if (!this.geocoder) { this.geocoder = new google.maps.Geocoder(); }
    if (this.geocoder) {
      this.geocoder.geocode({
        address: location
      }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0].geometry.location) {
            this.addPropReq.latitude = results[0].geometry.location.lat();
            this.addPropReq.longitude = results[0].geometry.location.lng();
          }
        }
      });
    }
  }

  onSelectImages(event) {
    for (const file of event.files) {
      this.uploadedImages.push(file);
    }
  }
  onRemoveIamges(event) {
    this.uploadedImages = this.uploadedImages.filter(file => {
      if (file.name !== event.file.name) {
        return true;
      } else {
        return false;
      }
    });
  }
  onSelectLayout(event) {
    for (const file of event.files) {
      this.uploadedLayout = file;
    }
  }
  onSelectBroucher(event) {
    for (const file of event.files) {
      this.uploadedBroucher = file;
    }
  }
  onRemoveLayout(event) {
    this.uploadedLayout = null;
  }
  onRemoveBroucher(event) {
    this.uploadedBroucher = null;
  }

}
