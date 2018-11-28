import { Component, OnInit } from '@angular/core';
import { hocsinh } from '../../hocsinh';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {

    public users: hocsinh[] = [
        new hocsinh("M1", "Trần Văn Hưởng", "tranhuong1607@gmail.com", 28, "Hà Tĩnh")
        , new hocsinh("M2", "Nguyễn Thị Nga", "nganguyen1302@gmail.com", 24, "Nghệ An")
        , new hocsinh("M3", "Trần Văn Hải", "tranhai@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M4", "Trần Văn Khoa", "trankhoa@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M5", "Nguyễn Thị Nga", "nganguyen1302@gmail.com", 24, "Nghệ An")
        , new hocsinh("M6", "Trần Văn Hải", "tranhai@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M7", "Trần Văn Khoa", "trankhoa@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M8", "Nguyễn Thị Nga", "nganguyen1302@gmail.com", 24, "Nghệ An")
        , new hocsinh("M9", "Trần Văn Hải", "tranhai@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M10", "Trần Văn Khoa", "trankhoa@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M12", "Trần Văn Luật", "tranluat@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M13", "Trần Văn Luật", "tranluat@gmail.com", 23, "Hà Tĩnh")
        , new hocsinh("M14", "Trần Văn Luật", "tranluat@gmail.com", 23, "Hà Tĩnh")];
    user: hocsinh = this.users[0];

    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.users.forEach((p: hocsinh) => {
                if (p.id == params.id) {
                    this.user = p;
                }
            });
        });
    }
}