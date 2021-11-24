import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient){}
    
    protected UrlServiceV1: string = "http://localhost:3000/";

    getProducts() {

    }
}