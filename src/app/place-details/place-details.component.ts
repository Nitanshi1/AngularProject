import { Component, Input } from '@angular/core';
import { places } from '../place/places';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent {
   myplace?: places;

   constructor(private route: ActivatedRoute , 
    private location: Location , 
    private MemberService: NumberService){}

    ngOnInit(): void{
      this.getPlacedata();
    }

    getPlacedata():void{
    const id=Number(this.route.snapshot.paramMap.get('SerialNo'));
    this.MemberService.getPlacedata(id).subscribe(place=>this.myplace=place);
    }
    goBack():void{
      this.location.back();
    }
}
