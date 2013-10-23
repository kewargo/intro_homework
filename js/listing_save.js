
var tasks = [{taskDesc: 'Change oil in the Ram 2500', completed: false}, 
{taskDesc: 'Change Oil in Subaru Forrester', completed: false}, 
{taskDesc: 'Change Oil in Mini Cooper', completed: true}, {taskDesc: 'Change air filter in HVAC Air Handler', completed: true}, 
{taskDesc: 'Change batteries in Carbon Dioxide Detectors', completed: false}, 
{taskDesc: 'Bleed air out of hot water radiators', completed: true}, 
{taskDesc: 'Change water filter in refrigerator', completed: false}];

document.write('<ul class="list-group">');

    for(var i = 0; i < tasks.length; i++) 

    var name;

        for(name in tasks) {
            if(typeof tasks[name] == 'object') {
            /*   document.write('Task ' + (name) + ':'); */
            
                var subName;
                   for(subName in tasks[name]) {
                        document.write('<li class="list-group-item"><span class="glyphicon glyphicon-expand"></span> ' + tasks[name][subName] + '</li>');
                    } // end for(subName in tasks)
                
            } else {
            document.write(name + ": " + tasks[name]);
            
        } // end for(name in tasks)
      
    } // end for(var i)


/* {
document.write('<li class="list-group-item"><span class="glyphicon glyphicon-expand"></span> ' + tasks[i] + '</li>'); 
} */

document.write('</ul>');