            $w('#AddWorker').onClick((event) => { // check this event handler

                $w('#stateBox').changeState("twoState");

            }); // end of AddWorkers onClick event

        $w('#dropAssign').onChange((event) => {
            $w("#bxAddInfo").show();

        });

        $w('#btnAYes').onClick((event) => {
            $w("#bxAddInfo").hide();
            $w('#workerAdd').show();

        });

        $w('#btnANo').onClick((event) => {
            $w("#bxAddInfo").hide();
            $w('#workerAdd').show();
            $w("#dropAssign").options = $w("#dropAssign").placeholder ;

        });

$w('#workerAdd').onClick((event) => {
                let index = $w("#dropAssign").selectedIndex;
                let aWorkerOptions = $w("#dropAssign").options;
 
                let AdditonalWorker = $w("#dropAssign").value;
                console.log("value of choose worker");
                console.log(AdditonalWorker);
                let optionAddUpdated = $w('#Dropreassigned').options;
                let xAssign = $w('#dropAssign').options;


                        optionAddUpdated.push({label: aWorkerOptions[index].label, value: AdditonalWorker });

                        let reDefaultlist = xAssign.filter(newList => aWorkerOptions[index].value != newList.value); // run this filter when same supervisor has a new sheet
                        console.log('reDefaultList');
                        console.log(reDefaultlist);
                        $w('#dropAssign').options = reDefaultlist;
                        movedAssigned = reDefaultlist;
                         $w('#Dropreassigned').options = optionAddUpdated; 

                    //})
                $w('#stateBox').changeState("oneState");
                $w('#workerAdd').hide();

            }); // end of WorkerAdd Onclick 

            movedAssigned
            dropassign
            reDefaultlist
            btnComBooking
            //line 620 - search terms