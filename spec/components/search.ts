import { select } from "../actions";

export class SearchComponent {

    public async selectWidth(width){
        await select(0, width);        
    }

    public async selectHeight(height){
        await select(1, height);        
    }

    public async selectRadius(radius){
        await select(2, radius);        
    }

}