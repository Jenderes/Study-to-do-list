let date = new Date();  
let str=date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
$('#time-app').html(str);
var array = [];
i = 0
$('#clickbut').on('click', () => {
 let task = $('#todotask').val();
 $('#todotask').val('');
 array[i] = task;
 i+= 1;
sethtml = '';
for (let i = 0; i < array.length; i++) {
    sethtml += `<p>Task ${i+1}:   ${array[i]}</p>`
}
$('#list-app').html(sethtml);
});