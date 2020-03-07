import { LightningElement, wire} from 'lwc';
//import getAllWashroomsList from '@salesforce/apex/WashroomController.getAllWashroomsList';
import getAllWashrooms from '@salesforce/apex/WashroomController.getAllWashrooms';

export default class WashroomList extends LightningElement {
    washrooms;

    @wire(getAllWashrooms) washroomList(result) {
        this.washrooms = result;
        console.log(this.washrooms);
        console.log('in get all wasrhooms vanilla');
    }
    
}