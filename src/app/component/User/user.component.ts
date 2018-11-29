import { Component, OnInit } from '@angular/core';
import { hocsinh } from '../../hocsinh';
import { Router } from "@angular/router";
import { UserService } from './user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
    public data: hocsinh[];
    constructor(public router: Router, private userService: UserService) { }

    getUserFromService(): void {
        this.data = this.userService.getUser();
    }

    ngOnInit() {
        this.getUserFromService();
    }

    

    public gotoUserDetails(url, id) {
        this.router.navigate([url, id]).then(e => {
            if (e) {
                console.log("Navigation is successful!");
            } else {
                console.log("Navigation has failed!");
            }
        });
    }

}