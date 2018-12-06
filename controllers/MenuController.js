const inquirer = require('inquirer');
module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new Contact",
                    "Exit",
                    "Get Date",
                ]
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
          switch(response.mainMenuChoice){
            case "Add new Contact":
              this.addContact();
              break;
            case "Exit":
              this.exit();
            case "Get Date":
                this.getDate();
            default:
              console.log("Invalid input");
              this.main();
          }
        })
        .catch((err) => {
          console.log(err);
        });

    }
    clear(){
       // console.log('clear method');
        console.log('\x1Bc');
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }
    exit(){
        console.log("Thanks for using AdrressBloc!");
        process.exit();
    }

    getDate(){
        console.log('get date');
        let date = new Date();
        console.log(date);
        this.main();
    }

    getContactCount(){
        return this.contacts.length;
    }

}