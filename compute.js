<script>
	function computeValues(name, off, sleep, idle, active, state){
		// calculate watts divide by efficiency < return this value
		// values are percentages!!!!
		// return one day is this many
		// get user state; state has different regulations for power creation %
		// amt watts are from nonrenewable and turn this into carbon < return as image
		

		// get values from the JSON
		computerVals = obj["computers"][name];
		offWeight = Number(computerVals["off"]);
		sleepWeight = Number(computerVals["sleep"]);
		idleWeight = Number(computerVals["idle"]);
		activeWeight = Number(computerVals["active"]);
		supplyEfficiencyWeight = Number(computerVals["Power supply efficiency"]);
		// multiply the percentages by values
		
		computerPower = off*offWeight + sleep*sleepWeight + idle*idleWeight + active*activeWeight;
		// devide the efficeincy < return actual value

		wattsUsed = computerPower / supplyEfficiencyWeight;
		

		// multiply by state nonrenewable <return images

		console.log('sent from: ' + $(form).serialize());
		return true;
	}
</script>
