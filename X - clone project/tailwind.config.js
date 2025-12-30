
/** @type {import('tailwindcss').Config} */
module.exports = {
    content:["*.html"],
    theme:{
        extend:{
            spacing:{
                500:'500px'
            }
        },
    },
plugins:[
    function ({addUtilities}) {
     const newUtilities = {
        '.':{
            margin:'0 auto',
        },
     }   
     addUtilities(newUtilities,['responsive','hover']);
    },

],
}
