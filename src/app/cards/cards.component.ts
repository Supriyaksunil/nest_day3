import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() card1 = { title: 'Dog', text: 'A loyal companion.', image:'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D', link: '/dog' };
  @Input() card2 = { title: 'Cat', text: 'A graceful and independent pet.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYLhQPJ4OY2UaPAqqLdb-MKHk4GKBYji9nbw&s', link: '/cat' };
  @Input() card3 = { title: 'Cow', text: 'A gentle farm animal.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6OSC_EQ1LNb6X9ueUFxAGJxFAkDdyzViLA&s', link: '/cow' };
  @Input() card4 = { title: 'Elephant', text: 'The largest land mammal.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWBFMfd0QXsRSalpO4HVu2Ac6tWE0Fpl7wg&s', link: '/elephant' };
  @Input() card5 = { title: 'Lion', text: 'The king of the jungle.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2025-01/Lion-cub-london-zoo.jpg.webp', link: '/lion' };
  @Input() card6 = { title: 'Horse', text: 'A strong and fast animal.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOI-HSyOFDV631QzyRGPY3tRj08oIQVfPlBQ&s', link: '/horse' };
  @Input() card7 = { title: 'Tiger', text: 'A fierce and powerful predator.', image: 'https://cms.londonzoo.org/sites/default/files/styles/responsive/public/592/350/1/2025-01/Luke-Capeling-Tiger.jpg.webp', link: '/tiger' };
  @Input() card8 = { title: 'Rabbit', text: 'A cute and fluffy animal.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyGck8zaVUhsxpLlYylyH94gdn2bpKZhDcA&s', link: '/rabbit' };
  @Input() card9 = { title: 'Parrot', text: 'A colorful and talkative bird.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaFzNIeIhWVWVPmQGdbSxXVyX2AsyFbupwQ&s', link: '/parrot' };
  @Input() card10 = { title: 'Dolphin', text: 'An intelligent marine animal.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBiIhM2kC8gKjYiVxwTbQ-f6cik5sztKeSQ&s', link: '/dolphin' };
}
