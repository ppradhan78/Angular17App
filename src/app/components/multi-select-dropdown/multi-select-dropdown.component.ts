import { Component, OnInit } from '@angular/core';
import { CountryDTO } from './CountryDTO ';

@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.scss'
})
export class CountryDropdownComponent implements OnInit {
  countries: CountryDTO[] = [
    { id: 1, name: 'United States', code: 'US' },
    { id: 2, name: 'Canada', code: 'CA' },
    { id: 3, name: 'Germany', code: 'DE' },
    { id: 4, name: 'India', code: 'IN' }
  ];

  selectedCountries: CountryDTO[] = [];
  dropdownOpen: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: CountryDTO): void {
    const index = this.selectedCountries.findIndex(c => c.id === country.id);
    if (index === -1) {
      this.selectedCountries.push(country);
    } else {
      this.selectedCountries.splice(index, 1);
    }
  }

  isSelected(country: CountryDTO): boolean {
    return this.selectedCountries.some(c => c.id === country.id);
  }
}
