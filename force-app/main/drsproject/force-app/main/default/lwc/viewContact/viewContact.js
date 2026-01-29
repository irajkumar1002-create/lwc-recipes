import { LightningElement ,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ViewContact extends LightningElement {
@api recordId;
contactName;
contactEmail;

@wire(getRecord ,{ recordId:'$recordId',fields:[NAME_FIELD,EMAIL_FIELD]})
 wireddata({error,data}){
    if(data){
        this.contactName=data.fields.Name.value;
        this.contactEmail=data.fields.Email.value;
    }
    else if(error){
        console.log(error);
    }
 }



}