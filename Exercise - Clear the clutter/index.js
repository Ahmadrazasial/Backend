const fs = require('fs');
// const { console } = require('inspector');
const path = require('path');

const dirPath = path.join(__dirname,'files');

// console.log(dirPath)
// console.log(path.dirname())

function organizefiles() {

    const files = fs.readdirSync(dirPath)

    for (let file of files) {
        console.log(file)
        
        const filePath = path.join(dirPath,file);
        const stat = fs.statSync(filePath);

        // console.log(stat);

        if(stat.isFile()){
            let ext = path.extname(file).slice(1);
            // console.log(ext)

            let folderPath = path.join(dirPath,ext);
            // console.log(folderPath)

            if(!fs.existsSync(folderPath)){
                fs.mkdirSync(folderPath);
            }

            let destpath = path.join(folderPath,file)
            fs.renameSync(filePath,destpath)
        }

    }

}

organizefiles()