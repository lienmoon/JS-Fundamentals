

export function printAge(age){
    console.log(age)
}

class CustomerDetails {
    /**
     * 
     * @param {*} lastname 
     */
     printLastname(lastname) {
        console.log(lastname)
    }
    printFirstName(firstname){
        console.log(firstname)
    }

}

export const customerDetails = new CustomerDetails()