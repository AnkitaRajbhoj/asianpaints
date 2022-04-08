
'transaction point started here
Services.StartTransaction "asianpaints"

'taking values from datasheet 1
mrowcount=datatable.GetSheet("Action1").GetRowCount @@ script infofile_;_ZIP::ssf31.xml_;_
msgbox mrowcount

For i = 1 To mrowcount Step 1
	Datatable.SetCurrentRow(i)
	Modexe=Datatable("Moduleexe","Action1")
	'msgbox Modexe
	If modexe="Y" Then
		
		Modid=Datatable("ModuleID","Action1")
		
		ModName=Datatable("ModuleName","Action1")
		
		msgbox Modid
		msgbox ModName
		
		'taking values from datasheet 2
		trowcount=datatable.GetSheet("Action2").GetRowCount
		'msgbox trowcount
		
		For j = 1 To trowcount Step 1
		Datatable.SetCurrentRow(j)
		If Modid=Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" Then
		testcaseid=Datatable("TestcaseId","Action2")
		msgbox testcaseid
		
		'taking values from datasheet 3
		tsrowcount=datatable.GetSheet("Action3").GetRowCount
		'msgbox tsrowcount
		
		For k = 1 To tsrowcount Step 1
			Datatable.SetCurrentRow(k)
			If testcaseid=Datatable("TestcaseId","Action3") Then
				keyword=Datatable("Keyword","Action3")
				msgbox keyword
				
				'calling functions
				Select Case (keyword)
					Case "ou"
					Call openurl()
					
					Case "sb"
					Call searchbox("Texture")
					
					Case "hd"
					Call header()
					
					Case "pb"
					Call paintbudget()
					
					Case "cv"
					Call colorvisual()
					
					Case "ec"
					Call explorecolor()
					
					Case "da"
					Call designapp()
					
					Case "fs"
					Call findstore("400200")
				
				Case "sbk"	
			sbrowcount=datatable.GetSheet("Action4").GetRowCount
				For l = 1 To sbrowcount Step 1
					datatable.SetCurrentRow(l)
					Call searchbox(datatable("productname","Action4"))

				Next
				
				Case "fsk"
				fsrowcount=datatable.GetSheet("Action4").GetRowCount
				For m = 1 To fsrowcount Step 1
					datatable.SetCurrentRow(m)
					Call findstore(datatable("pincode","Action4"))
				Next
				
					
				End Select
			End If
		Next
		End  If
		Next
	End If
Next

Services.EndTransaction "asianpaints"
'transaction point ends here @@ script infofile_;_ZIP::ssf58.xml_;_
 @@ script infofile_;_ZIP::ssf53.xml_;_
 @@ hightlight id_;_65974_;_script infofile_;_ZIP::ssf59.xml_;_
 @@ script infofile_;_ZIP::ssf62.xml_;_
 @@ script infofile_;_ZIP::ssf61.xml_;_
