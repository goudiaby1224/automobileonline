/**
 * Servic ed'exposition des operations du domaine
 */
import {Vitre} from "./vitre";

export class VitreService{

   datasourceVitre:Vitre[];

   public constructor(){
     this.datasourceVitre = [{'url':'assets/images' + '/accura.jpg',
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
