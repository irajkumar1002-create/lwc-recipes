import { LightningElement } from 'lwc';

export default class Inputfield extends LightningElement {
    data = '';
    handleme(event){
        this.data=event.target.value;
    }
}