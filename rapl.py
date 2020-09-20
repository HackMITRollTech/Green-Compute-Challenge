import pyRAPL

pyRAPL.setup()

report = pyRAPL.outputs.DataFrameOutput()

with pyRAPL.Measurement('bar',output=report):
	for i in range(0,500):
		x = 4204190421*21094019420
report.data.head()

