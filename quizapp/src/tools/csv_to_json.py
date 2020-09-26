from openpyxl import Workbook
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl import load_workbook
import collections as col
import string
import numpy as np
import pandas as pd
import plotly.graph_objects as go
import datetime
from pptx.util import Inches
from pptx.chart.data import ChartData
from pptx.enum.chart import XL_CHART_TYPE
from pptx.chart.data import CategoryChartData
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor
from pptx.util import Inches, Pt
from pptx.enum.dml import MSO_THEME_COLOR
from pptx import Presentation
from pptx.util import Inches
import os
from os.path import basename, splitext

# todo: filename should be passed in commandline for function
filename = "12th_Bio_Botany_Tamil_U02_01.xlsx"
# lessonTitle = "அலகு 5 - தாவர செயலியல் (Plant Physiology)"
lessonTitle = "11th - தாவரவியல் நீட் போட்டி தேர்வு பயிற்சி"

wb = load_workbook(filename)

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
    end_row_index = int(upper_cell[1:]) - 1
    return (start_row_index, end_row_index)

def getOptionAsString(optionInput):
    result = ""
    if optionInput is None:
        result = ""
    else:
        result = str(optionInput)
    return result

def createQuizFile():
    quizContent = """export default {
	title: "Week 4 Quiz",
	category: "JavaScript and Basic Data Structures",
	challenges: [
		{
			title: `Which JavaScript type represents an "empty" or "absent" value?`,
			subtitle: `JavaScript Data Types`,
			choices: [
				"none",
				"empty",
				"nonce",
				"nothing",
				"null/undefined",
			],
			solution: `4`,
			explanation: `
				In JavaScript <code>null</code> and <code>undefined</code> are both types to represent
				values which are "absent" or "not defined yet". Each has a specific meaning and usage,
				but in general they represent types where the value is missing or not present yet.`
		},
    ]
    };
    """
    return quizContent

def getQuizFilename(csvFilename):
    filenameWithoutExtn = splitext(basename(csvFilename))[0]
    return filenameWithoutExtn + "." + "js"

def writeToFile(quizRecord, filename):
    f = open(filename, "w")
    f.write(createQuizFile())
    f.close()

print(getTotalRecords(table_cell_range))
print(get_cell_identifier(table_cell_range))
print(get_cell_indexes(table_cell_range))
excel_A_to_Z = list(string.ascii_uppercase)

(start_row_index, end_row_index) = get_cell_indexes(table_cell_range)
(start_row_id, end_row_id) = get_cell_identifier(table_cell_range)

QuizRecord = col.namedtuple('QuizRecord', 'question_no, question, exams_already_asked, year, option_1, \
                            option_2, option_3, option_4, option_5, correct_answer, page_no,topic_name')
QuizRecordsDb = []

for row in range(start_row_index, end_row_index + 1, 1):
    print("processing row " + str(start_row_index))
    quizRecord = QuizRecord(sheet_ranges['A' + str(row + 1)].value,
                            sheet_ranges['B' + str(row + 1)].value,
                            sheet_ranges['C' + str(row + 1)].value,
                            sheet_ranges['D' + str(row + 1)].value,
                            sheet_ranges['E' + str(row + 1)].value,
                            sheet_ranges['F' + str(row + 1)].value,
                            sheet_ranges['G' + str(row + 1)].value,
                            sheet_ranges['H' + str(row + 1)].value,
                            sheet_ranges['I' + str(row + 1)].value,
                            sheet_ranges['J' + str(row + 1)].value,
                            sheet_ranges['K' + str(row + 1)].value,
                            sheet_ranges['L' + str(row + 1)].value,
                            )
    QuizRecordsDb.append(quizRecord)

quizFilename = getQuizFilename(filename)
for quizRecord in QuizRecordsDb:
    # print(quizRecord)
    writeToFile(quizRecord, quizFilename)

print("Completed creation of quiz js")


