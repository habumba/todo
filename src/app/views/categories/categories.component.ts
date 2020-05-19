import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    categories: Category[];

    constructor(private dataHandler: DataHandlerService) {
    }

    //метод вызывается автоматически после инициализации компонента
    ngOnInit() {
        this.categories = this.dataHandler.getCategories();
        //console.log(this.categories);
    }

    showTasksByCategory(category: Category) {
        this.dataHandler.getTasksByCategory(category);
    }
}
