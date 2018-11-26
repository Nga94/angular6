import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nhanvien',
    template: `
    <div class="nhanvien">
        <h3>Ho va ten: {{hoten}}</h3>
        <h3>Tuoi: {{2018 - namsinh}}</h3>
        <h3>So thich: {{sothich.musi}} and {{sothich.food}}</h3>
        <h4>Phan tu thu: {{mang[2]}}</h4>
        <img src="{{image}}" />
    </div>
    `
})
export class NhanvienComponent{
    hoten:string = "Tran Van Huong";
    namsinh:number = 1990;
    sothich = {musi: "sing", food: "fish"};
    mang:string[] = ["1", "2", "3"];
    image:string = "./static/1435661557-foydsu_su_8_ojil.jpg";
}