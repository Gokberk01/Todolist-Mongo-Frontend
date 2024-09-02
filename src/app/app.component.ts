import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root', //selector yaptığımız yer yani main index.html dosyasında app-root içerisine bu componentı atıyoruz demek.
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FormsModule], //Görünmesini istediğim componentı import etmem lazım.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {





  // title = 'denemeToDoFE';
  // deniyoruz = 'bu bir deneme yazısıdır';

  // titleDeneme: string = 'this is a dynamic text';
  // titleInt: number = 5;
  // titleArr: number[] = [1, 2, 3, 4, 5];
  // imgUrl: string =
  //   'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3';

  // isDisabled: boolean = false;
  // isActive: boolean = false;
  // fruitName: string = 'Apple';
}
