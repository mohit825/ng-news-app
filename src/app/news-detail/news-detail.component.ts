import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  sources: any;
  newSources: any;

  constructor(public router : ActivatedRoute,
    private dataservice: DataService
    ) { 
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id , "id")
    // let url = "http://newsapi.org/v2/sources="+ id +"&apiKey=5a970b00a9004cbdafd093583cb8c4f9";
    let url = "https://newsapi.org/v2/top-headlines?sources="+ id +"&apiKey=5a970b00a9004cbdafd093583cb8c4f9";

    dataservice.getSources(url).then((res) =>{
      return res.json()
    })
      .then((res) => {
        console.log(res.articles, "response");
        this.sources = res.articles;
        this.newSources = res.articles;
      })
    .catch((err) =>{
      console.log("errors" , err)
    });
  }

  ngOnInit() {
  }

}
