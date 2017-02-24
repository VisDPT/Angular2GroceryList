//Where you define what our to do item will look like as far as the data goes

import {Injectable} from '@angular/core';//injectable module says that its a data componenet we are adding to the app-root core in html
@Injectable()


class Item{//where you define how your to do item data will be
    title: string;
//    category: string;
    taskNumber: number;
    completed: boolean;
}

export class toBuyService { 
    public items: Item [] = []; //the type is an array called Item[] and its an empty array; public so it can be accessed throughout and not in only this 1 file; will house all our to do items
    }