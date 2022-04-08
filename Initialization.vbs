Dim objuft

Set objuft=CreateObject("QuickTest.Application")
objuft.visible=True
objuft.launch
objuft.open("E:\capgemini\Asianpaintsankita\Driver\Driver")

objuft.Test.Run
objuft.Test.close
objuft.quit
Set objuft=nothing
