import openpyxl

wb = openpyxl.Workbook()
new_range = openpyxl.workbook.defined_name.DefinedName(
    'newrange', attr_text='Sheet!$A$1:$A$5')
wb.defined_names.append(new_range)

# create a local named range (only valid for a specific sheet)
sheetid = wb.sheetnames.index('Sheet')
private_range = openpyxl.workbook.defined_name.DefinedName(
    'privaterange', attr_text='Sheet!$A$6', localSheetId=sheetid)
wb.defined_names.append(private_range)
# this local range can't be retrieved from the global defined names
assert('privaterange' not in wb.defined_names)

# the scope has to be supplied to retrieve local ranges:
print(wb.defined_names.localnames(sheetid))
print(wb.defined_names.get('privaterange', sheetid).attr_text)
