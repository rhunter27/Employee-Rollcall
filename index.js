// inquirer (options)
import inquirer from "inquirer";
import db from "./db/DB.js";
import "console.table";


const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all departments",
            "Exit"
        ]
    });

    switch (action) {
        case "View all employees":
            await viewAllEmployees();
            break;
        case "View all departments":
            await viewAllDepartments();
            break;
        case "Exit":
            console.log("Goodbye!");
            process.exit();
    }
}

const viewAllEmployees = async () => {
    const employees = await db.viewAllEmployees();
    console.table(employees);
    await mainMenu();
}

const viewAllDepartments = async () => {
    const departments = await db.viewAllDepartments();
    console.table(departments);
    await mainMenu();
}

mainMenu();