import fs from 'fs/promises';
import fsn from 'fs';

import path from 'path';
// import { console } from 'inspector';

const dirname = path.resolve();

console.log(dirname)

let files = await fs.readdir(dirname)

for (const item of files) {
    console.log(item)
    let filepath = path.join(dirname,item);
    
    let filestat = await fs.stat(filepath)
    if(filestat.isFile()){
    // let ext = path.extname(item).slice(1);
    let ext = item.split(".").pop()
    console.log(ext)
    if(ext != "js" && ext != "json"){
     
        // console.log(filepath)

        let folderPath = path.join(dirname,ext)
        if(!fsn.existsSync(folderPath)){
            fs.mkdir(folderPath)
        }else{
            fs.rename(filepath,path.join(folderPath,item))
        } 
    }
}
    // let folderpath = path.join(dirname,item);
    // let foltat = await fs.stat(folderpath)
    // if(foltat.isDirectory()){
    //     let outMove = await fs.readdir(folderpath);
    //     console.log(outMove)
    //   for (const file of outMove) {
    //     console.log(file)
    //     fs.rename(path.join(folderpath,file),path.join(dirname,file))
    //   }
    // }
}