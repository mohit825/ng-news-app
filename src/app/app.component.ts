import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  sources : any = [];

  constructor(private dataservice: DataService){ }

  ngOnInit(){
    this.dataservice.getSources().then((res) =>{
      return res.json()
    })
      .then((res) => {
        console.log(res.sources, "response");
        this.sources = res.sources;
      })
    .catch((err) =>{
      console.log("errors" , err)
    });

  }
}
