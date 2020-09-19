<script>
	function computeValues(name, off, sleep, idle, active, state){
		// calculate watts divide by efficiency < return this value
		// values are percentages!!!!
		// return one day is this many
		// get user state; state has different regulations for power creation %
		// amt watts are from nonrenewable and turn this into carbon < return as image
		

		// get values from the JSON
		var computerVals = computerData["computers"][name];
		var offWeight = Number(computerVals["off"]);
		var sleepWeight = Number(computerVals["sleep"]);
		var idleWeight = Number(computerVals["idle"]);
		var activeWeight = Number(computerVals["active"]);
		var supplyEfficiencyWeight = Number(computerVals["Power supply efficiency"]);
		
		// multiply the percentages by values
		var computerPower = off*offWeight + sleep*sleepWeight + idle*idleWeight + active*activeWeight;
		
		// devide the efficeincy < return actual value
		var kwattH = computerPower / supplyEfficiencyWeight; //kWh
		
		// multiply by state nonrenewable <return images
		var stateVal = stateData["states"][state];
		var coalSt = Number(stateVal["Coal"]);
		var ngasSt = Number(stateVal["Natural Gas"]);
		var renSt = Number(stateVal["Renewable"]);
		var nukeSt = Number(stateVal["Nuclear"]);

		var energyVal = stateData["equiv"];
		var coalVal = Number(energyVal["Coal"]);
		var ngasVal = Number(energyVal["Natural Gas"]);
		var renVal = Number(energyVal["Renewable"]);
		var nukeVal = Number(energyVal["Nuclear"]);

		var stateCarbonLbsPerKwH = coalSt*coalVal + ngasSt*ngasVal + renSt*renVal + nukeSt*nukeVal;
		
		var carbonLbs = stateCarbonLbsPerKwH * kwattH;
		return carbonLbs;
		

		// console.log('sent from: ' + $(form).serialize());
		// return true;
	}
</script>
