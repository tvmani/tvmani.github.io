import win32com.client

# Talk to different applications using python
# use more python objects

# Store each named range = table  in a python dictionary
# read through them
# copy to powerpoint

# create a new instance of excel
ExcelApp = win32com.client.Dispatch("Excel.Application")
ExcelApp.Visible = True

# open the workbook
workbook = ExcelApp.Workbooks.Open(r"E:\Resources\RangeBook.xlsx")

# create a dictionary object
RangeDict = {}

print(workbook.WorkSheets.count)

# Loop through all the named reanges and store them in the dictionary
for worksheet in workbook.WorkSheets:

    # Get the range index & the name
    rangeIndex = worksheet.Index
    rangeNamed = worksheet.Name

    print(rangeIndex)

    # Set the index as the key and name as the value
    RangeDict[rangeIndex] = rangeNamed

print(RangeDict)