import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import generateName from "sillyname";
import {randomSuperhero} from "superheroes";


inquirer.prompt(
    [{
        message : "What is your name?",
        name : "name"
    }]).then((answers) => {
        
        var sillyName = generateName();
        var superhero = randomSuperhero();
        var txt = "Input: " + answers.name + "\nSilly Name: " + sillyName + "\nSuperhero: " + superhero;

        qrConvertName(answers.name);
        qrConvertSillyName(sillyName);
        qrConvertSuperhero(superhero);
        createTxt(txt);
        
        console.log("\nHello", answers.name);
        console.log("your villain name will be", sillyName);
        console.log('and your superhero name will be', superhero);

        console.log("\nQR codes are generated");
    });

function qrConvertName(name){
    var qr_img = qr.image(name, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('name.png'));
    
}
function qrConvertSillyName(sillyName){
    var qr_img = qr.image(sillyName, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('sillyname.png'));
    
}
function qrConvertSuperhero(superhero){
    var qr_img = qr.image(superhero, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('superheroname.png'));
    
}
function createTxt(text){
    fs.writeFile('myhero.txt', text, (err) => {
    if (err) throw err;
    console.log('Text file updated');
    }); 
}