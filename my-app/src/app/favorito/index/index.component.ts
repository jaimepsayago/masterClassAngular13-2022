import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../favorito.service';
import { Favorito } from '../favorito';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  favorito: Favorito[] = [];
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public favoritoService: FavoritoService) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.favoritoService.getAll().subscribe((data: Favorito[])=>{
      this.favorito = data;
      console.log("index");
      console.log(this.favorito);
    })  
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.favoritoService.delete(id).subscribe(res => {
         this.favorito = this.favorito.filter(item => item._id !== id);
         console.log('Post deleted successfully!');
    })
  }
     
}
