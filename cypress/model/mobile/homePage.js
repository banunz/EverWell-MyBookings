export default{
    elements:{
        get newAppointmentButton(){
            return cy.get('data-cy[name="newappointment"]');
        },
        get mondayCalendar(){
            return cy.get('data-cy[name="monday"]');
        },
        get tuesdayCalendar(){
            return cy.get('data-cy[name="tuesday"]');
        },
        get wednesdayCalendar(){
            return cy.get('data-cy[name="wednesday"]');
        },
        get thursdayCalendar(){
            return cy.get('data-cy[name="thursday"]');
        },
        get fridayCalendar(){
            return cy.get('data-cy[name="friday"]');
        },
        get saturdayCalendar(){
            return cy.get('data-cy[name="saturday"]');
        },
        get sundayCalendar(){
            return cy.get('data-cy[name="sunday"]');
        },

    }

}