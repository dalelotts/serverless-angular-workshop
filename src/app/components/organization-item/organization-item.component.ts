import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../../models/Organization';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-organization-item',
  templateUrl: './organization-item.component.html',
  styleUrls: ['./organization-item.component.css']
})
export class OrganizationItemComponent implements OnInit {

  @Input() organization: Organization = {
    name: 'Organization Name',
    website: 'https://organization.org',
    description: 'This will describe the organization.',
    donationAmount: '10',
    twitter: 'https://twitter.com/organization',
    image: 'https://bit.ly/2ZdePYO',
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
