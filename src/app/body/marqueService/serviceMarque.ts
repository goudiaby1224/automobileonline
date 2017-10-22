import { Marque } from './marque';
import {Injectable} from "@angular/core";
import {element} from "protractor";

@Injectable()
export class ServiceMarque{
public dataSource:Marque[];

public constructor()
{
  this.dataSource=[
    {'url':'assets/images' + '/accura.jpg',
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
    {'url':'assets/images' + '/ford.jpg',
      'title':'ford',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/gmc.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/honda.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/hyundai.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/infiniti.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/isuzu.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/jaguar.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/jeep.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/kia.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/Land-Rover.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/landrover.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/Land-Rover.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/lexus.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/mazda.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/mercedes.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/mitsubishi.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/nissan.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/opel.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/pontiac.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/range-rovo.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/saturn.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/toyota.jpg',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/walkwagen.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
    {'url':'assets/images' + '/volvo.png',
      'title':'Aliquam erat volutpat',
      'caption':'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},

  ]
}

marque :Marque[];

public getDataSource()
{
  return this.dataSource;
}


}
