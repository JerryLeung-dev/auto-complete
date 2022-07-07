import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface InfoForm {
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countryFormGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.countryFormGroup = this.formBuilder.group({
      country: [
        {
          name: 'Deutschland',
          alpha2Code: 'DE',
          alpha3Code: 'DEU',
          numericCode: '276',
        },
      ],
    });
  }

  onCountrySelected(country: Country) {
    console.log(country);
  }
}
