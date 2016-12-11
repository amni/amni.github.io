function pushStyle(to, from) {
    Object.keys(from).forEach(function(key) {
        to[key] = from[key];
    });
}

// Macro for pushStyle function.
let ps = pushStyle;

function backgroundColorStyle(color) {
    return {backgroundColor: color};
}

let profileContainer = 
{
	marginTop: '5.1%', 
	width: '71.875%',
	marginLeft:"auto", 
	marginRight:"auto", 
	textAlign:"left", };