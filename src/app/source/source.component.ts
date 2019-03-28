import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppRoutingModule } from 'src/app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor(private dataservice: DataService,
    public router : Router
    ) {  }
  tempdata:any=[];
  sources : any = [];
  newSources : any = [];
  api : string = "http://newsapi.org/v2/sources?apiKey=5a970b00a9004cbdafd093583cb8c4f9"


  ngOnInit() {
    this.dataservice.getSources(this.api).then((res) =>{
      return res.json()
    })
      .then((res) => {
        console.log(res.sources, "response");
        this.sources = res.sources;
        this.newSources = res.sources;
      })
    .catch((err) =>{
      console.log("errors" , err)
    });
  }

  selectSource(srcName){
    console.log(srcName , "src");
    this.router.navigate(['../news/'+ srcName]);
  }

  filterSource(e){
    
    let categoryName = e.target.value.toLowerCase();
    if (categoryName === "all"){
      this.dataservice.getSources(this.api).then((res) =>{
        return res.json()
      })
        .then((res) => {
          
          this.sources = res.sources;
          this.newSources = res.sources;
        })
      .catch((err) =>{
        console.log("errors" , err)
      });

    } else {
    this.sources = this.newSources.filter((source)=>{
      // console.log(source.language)
      return source.category === categoryName;

    });
    this.tempdata = this.sources;
    console.log(this.tempdata, "tempinit")
    }
  }

  
  langSource(e){
    let langName = e.target.value;
    console.log(e.target.value, "lang")
    let langArr =  this.tempdata.filter((source) => {
      return source.language === langName;
    })
    console.log(this.tempdata , "tempdata");
    console.log(this.sources , "bfrsrccs");
    console.log(langArr, "bfrlangarr");

    this.sources = langArr;
    console.log(this.sources , "aftersrccs");
    console.log(langArr, "afterlangarr");
    
  }

}
