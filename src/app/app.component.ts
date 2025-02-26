import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, FooterComponent, CardsComponent]
})
// export class AppComponent {
//   title = 'Supriya';
//   isColorChanged = false; // Flag to track button color

//   // showAlertAndChangeColor() {
//   //   alert('This is an alert Message!');
//   //   this.isColorChanged = true; // Change flag to true after alert
//   // }
// }

export class AppComponent {
  card1 = { 
    title: 'Cow', 
    text: 'Explore the beauty of nature with this amazing scenic view.', 
    image: 'assets/nature.jpg', 
    link: 'https://example.com/nature' 
  };

  card2 = { 
    title: 'Cat', 
    text: 'Experience the vibrant nightlife of the city with stunning lights.', 
    image: 'assets/city.jpg', 
    link: 'https://example.com/city' 
  };

  card3 = { 
    title: 'Duck', 
    text: 'Embark on a thrilling adventure to the mountains.', 
    image: 'assets/mountains.jpg', 
    link: 'https://example.com/mountains' 
  };
}

