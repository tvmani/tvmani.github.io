from openpyxl import Workbook
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl import load_workbook
import collections as col
import string


wb = load_workbook(filename=r"002_NEET_Questions.xlsx")

sheet_ranges = wb.worksheets[0]

print(sheet_ranges.tables.items())

(table_name, table_cell_range) = sheet_ranges.tables.items()[0]

print(table_name, table_cell_range, sep=",")


def getTotalRecords(tableRange):
    # A1:C5
    (lower_cell, upper_cell) = tableRange.split(":")
    start_row = int(lower_cell[1:])
    end_row = int(upper_cell[1:])
    return end_row - start_row


def get_cell_identifier(tableRange):
    # A1:C5
    (lower_cell, upper_cell) = tableRange.split(":")
    start_row_id = lower_cell[0]
    end_row_id = upper_cell[0]
    return (start_row_id, end_row_id)


def get_cell_indexes(tableRange):
    # A1:C5
    (lower_cell, upper_cell) = tableRange.split(":")
    start_row_index = int(lower_cell[1:])
    end_row_index = int(upper_cell[1:])
    return (start_row_index, end_row_index)


print(getTotalRecords(table_cell_range))
print(get_cell_identifier(table_cell_range))
print(get_cell_indexes(table_cell_range))
excel_A_to_Z = list(string.ascii_uppercase)

(start_row_index, end_row_index) = get_cell_indexes(table_cell_range)
(start_row_id, end_row_id) = get_cell_identifier(table_cell_range)

# question_no	question	exams_already_asked	year	option_1	option_2	option_3	option_4	correct_answer

QuizRecord = col.namedtuple('QuizRecord', 'question_no, exams_already_asked, year, option_1, \
                            option_2, option_3, option_4, correct_answer')
QuizRecordsDb = []

for row in range(start_row_index, end_row_index, 1):
    print("processing row " + str(start_row_index))
    quizRecord = QuizRecord(sheet_ranges['A' + str(row + 1)].value,
                            sheet_ranges['B' + str(row + 1)].value,
                            sheet_ranges['C' + str(row + 1)].value,
                            sheet_ranges['D' + str(row + 1)].value,
                            sheet_ranges['E' + str(row + 1)].value,
                            sheet_ranges['F' + str(row + 1)].value,
                            sheet_ranges['G' + str(row + 1)].value,
                            sheet_ranges['H' + str(row + 1)].value
                            )
    QuizRecordsDb.append(quizRecord)

for x in QuizRecordsDb:
    print(x)
