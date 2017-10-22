import {OnInit} from "@angular/core";
import {Carosserie} from "./carosserie";

/**
 * Service d'expostion des operqtions exposees sur  dans le domaine carosserie
 */
export  class ServiceCarosserie {

  datasource:Carosserie[];

  public constructor(){
    this.datasource = [{'url':'assets/images' + '/accura.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/audi.jpg',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/bmw.jpg',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/brand.gif',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/buick.jpg',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/cadillac.jpg',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/chevrolet.jpg',
        'title':'Aliquam erat volutpat',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url':'assets/images' + '/dodge.jpg',
        'title':'dodge',
        'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    ]

  }


}
