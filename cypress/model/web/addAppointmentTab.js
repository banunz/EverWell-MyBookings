export default{
    elements:{
        get appointmentName(){
            return cy.get('data-cy[name="appointmentname"]');
        },
        get date(){
            return cy.get('data-cy[name="date"]');
        },
        get time(){
            return cy.get('data-cy[name="time"]');
        },
        get saveButton(){
            return cy.get('data-cy[name="savebutton"]');
        },
        get cancelButton(){
            return cy.get('data-cy[name="cancelbutton"]');
        }
    }
}