import { Component } from '@angular/core';
import { GlobalConstants } from '../../services/api/global-constants';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  constants = GlobalConstants;

  constructor() {
  }

  ngOnInit(): void {
    console.log("okoko");
  }

}
