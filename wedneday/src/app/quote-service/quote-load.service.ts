import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment";
import {Goals } from "../goals";
import { Quotes } from '../quotes';


@Injectable({
  providedIn: 'root'
})
export class QuoteLoadService {

  quotes:Quotes

  getApiQuotes(){
    interface apiResponse{
      quote:string,
      author:string
    }

    let promise = new Promise((resolve,reject) =>{
      this.http.get<apiResponse>(environment.apiUrl).toPromise().then(thedata =>{
        this.quotes.quote = thedata.quote,
        this.quotes.author = thedata.author

        resolve()
      },error =>{
        this.quotes.quote = "Never give up!"
        this.quotes.author = "Winston Churchill"
        reject(error)
      })
    })
    return promise
  }



  constructor(private http:HttpClient) { 
    this.quotes = new Quotes("","")
  }
}
