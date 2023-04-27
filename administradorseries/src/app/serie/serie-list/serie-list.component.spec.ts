/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { SerieListComponent } from './serie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

describe('SerieListComponent', () => {
 let component: SerieListComponent;
 let fixture: ComponentFixture<SerieListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ SerieListComponent ],
     providers: [ SerieService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(SerieListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 10; i++) {
     const serie = new Serie(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.internet.url(),
       faker.image.imageUrl()
     );
     component.series.push(serie);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 11 <tr> elements', () => {
   expect(debug.queryAll(By.css('tr'))).toHaveSize(11)
 });

 it('should have 30 <td> elements', () => {
   expect(debug.queryAll(By.css('td'))).toHaveSize(30)
 });

 it('should have 10 <seriesname> tags with the serie.name', () => {
    debug.queryAll(By.css('seriesname')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.series[i].name)
    });
  });
});
