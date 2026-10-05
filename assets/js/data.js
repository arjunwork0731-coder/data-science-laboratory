/*==========================================================================
  DATA SCIENCE LABORATORY (22DS102006) - MOHAN BABU UNIVERSITY
  --------------------------------------------------------------------------
  CENTRAL CONFIGURATION & CONTENT STORE
  Edit this file to update student details, experiments, sections,
  videos, links, code, and theoretical course modules.
==========================================================================*/

/* -------------------------------------------------------------------------
   1. UNIVERSITY & LABORATORY BRANDING
   ------------------------------------------------------------------------- */
var university = {
  name: "Mohan Babu University",
  logo: "assets/img/mbu-logo-with-tagline.png",
  logoPlain: "assets/img/mbu-logo.png",
  website: "https://www.mbu.asia/",
  address: "Sree Sainath Nagar, A. Rangampeta, Tirupati - 517102, Andhra Pradesh"
};

var laboratory = {
  name: "Data Science Laboratory",
  tagline: "Department of Computer Science & Engineering",
  subtitle: "Digital Laboratory Portal"
};

var labMeta = {
  subjectCode: "22DS102006",
  courseTitle: "Data Science Laboratory",
  academicYear: "2025 - 2026",
  semester: "IV Semester B.Tech (CSE - Data Science)",
  department: "Department of Computer Science & Engineering",
  institution: "Mohan Babu University (MBU)",
  copyrightYear: "2026"
};

/* -------------------------------------------------------------------------
   2. STUDENT DETAILS (Shown on ID Card)
   ------------------------------------------------------------------------- */
var student = {
  photo: "assets/img/student-avatar.svg",   // Replace with "assets/img/student-photo.jpg"
  name: "K ARJUN REDDY",
  idNumber: "24102A030073",
  section: "CSE-DS-2",
  faculty: "S. Bosu Babu",
  profession: "Assistant Professor",
  role: "Student",
  branch: "Computer Science & Engineering (Data Science)",
  email: "24102A030073@mbu.asia",
  github: "https://github.com/karjunreddy",
  linkedin: "https://www.linkedin.com/in/k-arjun-reddy"
};

/* -------------------------------------------------------------------------
   3. EXPERIMENTS (Dynamic Experiments & Dynamic Sections A/B/C/D...)
   ------------------------------------------------------------------------- */
var experiments = [
  {
    id: 1,
    name: "Import and Export in CSV, JSON and Excel Formats",
    tagline: "Creating DataFrames and persisting tabular data across CSV, JSON and Excel with pandas.",
    previewVideo: "assets/videos/exp1-preview.mp4",
    youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/karjunreddy/data-science-lab-mbu/tree/main/experiment-1",
    summary: "This experiment demonstrates how tabular data is constructed in Python using pandas and persisted into flat-file and structured spreadsheet formats. A Student DataFrame is instantiated from a Python dictionary and inspected with print(), head() and shape to verify row counts and data types. The dataset is exported to CSV via to_csv() and reloaded using read_csv() with index verification. It is subsequently written to JSON with record orientation and pretty indentation, followed by validation through read_json(). Finally, the DataFrame is saved into an Excel workbook (.xlsx) with named sheets using to_excel() and reloaded with read_excel(). The practical outcome is mastery of data serialization across the three standard exchange formats in Data Science workflows.",
    sections: [
      {
        id: "a",
        letter: "A",
        title: "Creating a DataFrame and writing it to CSV",
        video: "assets/videos/exp1-a.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

# Define student dataset
students = {
    "Name": ["Arjun", "Kavya", "Harsha"],
    "Roll_no": [73, 110, 74],
    "Dept": ["DS", "AIML", "CSE"]
}

# Create DataFrame
df = pd.DataFrame(students)
print("--- Full DataFrame ---")
print(df)
print("\\n--- First 2 Records ---")
print(df.head(2))
print("\\n--- DataFrame Shape ---")
print(df.shape)

# Export to CSV
df.to_csv("StudentOutputs.csv", index=False)
print("\\n[SUCCESS] CSV file 'StudentOutputs.csv' created.")

# Read back to verify round-trip
df2 = pd.read_csv("StudentOutputs.csv")
print("\\n--- Reloaded from CSV ---")
print(df2)`,
        notes: "Key Points:\n- pd.DataFrame(dict) creates 2D tabular structure\n- to_csv(..., index=False) prevents generating redundant index columns\n- read_csv reads flat files back into memory"
      },
      {
        id: "b",
        letter: "B",
        title: "Exporting and reading a JSON file",
        video: "assets/videos/exp1-b.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

students = {
    "Name": ["Arjun", "Kavya", "Harsha"],
    "Roll_no": [73, 110, 74],
    "Dept": ["DS", "AIML", "CSE"]
}
df2 = pd.DataFrame(students)

# Export DataFrame to JSON with records orientation
df2.to_json(
    "Student.json",
    orient="records",
    indent=4
)
print("[SUCCESS] JSON file 'Student.json' created with indent=4.")

# Read JSON back
df3 = pd.read_json("Student.json")
print("\\n--- Reloaded DataFrame from JSON ---")
print(df3)`,
        notes: "Key Points:\n- orient='records' serializes each row as an independent JSON object\n- indent=4 provides readable indentation\n- read_json deserializes records into a DataFrame"
      },
      {
        id: "c",
        letter: "C",
        title: "Exporting and reading an Excel workbook (.xlsx)",
        video: "assets/videos/exp1-c.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

students = {
    "Name": ["Arjun", "Kavya", "Harsha"],
    "Roll_no": [73, 110, 74],
    "Dept": ["DS", "AIML", "CSE"]
}
df3 = pd.DataFrame(students)

# Export to Excel sheet
df3.to_excel(
    "Student.xlsx",
    sheet_name="Student Details",
    index=False
)
print("[SUCCESS] Excel workbook 'Student.xlsx' created successfully.")

# Read sheet back
df4 = pd.read_excel(
    "Student.xlsx",
    sheet_name="Student Details"
)
print("\\n--- Reloaded DataFrame from Excel Sheet ---")
print(df4)`,
        notes: "Key Points:\n- sheet_name creates dedicated sheets within an openpyxl / xlsx workbook\n- read_excel targets specific sheets to restore relational integrity"
      }
    ]
  },
  {
    id: 2,
    name: "Web Data, APIs and SQL Database Integration",
    tagline: "Fetching live REST API payloads and executing CRUD operations in SQLite databases.",
    previewVideo: "assets/videos/exp2-preview.mp4",
    youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/karjunreddy/data-science-lab-mbu/tree/main/experiment-2",
    summary: "This experiment investigates the two primary acquisition channels for production Data Science workflows: live HTTP web services and relational databases. Section A consumes the public GitHub REST API for pandas issues using Python's requests library. It evaluates status codes, parses raw JSON responses, and structures nested JSON objects into a pandas DataFrame. Section B moves to embedded relational data by creating a local SQLite database (Engineer.db). It runs DDL to generate tables, inserts structured records, executes SQL SELECT queries into DataFrames, and performs UPDATE and DELETE transactions using connection commits.",
    sections: [
      {
        id: "a",
        letter: "A",
        title: "Fetching live REST API data using Requests and Pandas",
        video: "assets/videos/exp2-a.mp4",
        youtubeVideo: "",
        code: `import requests
import pandas as pd

url = "https://api.github.com/repos/pandas-dev/pandas/issues"
response = requests.get(url)

print("HTTP Status Code:", response.status_code)

if response.status_code == 200:
    data = response.json()
    print("Payload Type:", type(data))
    print("Number of issues fetched:", len(data))
    
    # Convert list of JSON dicts into DataFrame
    df = pd.DataFrame(data)
    cols = ["id", "number", "title", "state"]
    print("\\n--- Selected Columns ---")
    print(df[cols].head(5))
else:
    print("API Request failed with code:", response.status_code)`,
        notes: "Key Points:\n- response.status_code == 200 verifies successful HTTP communication\n- response.json() parses JSON directly to Python lists/dicts\n- pd.DataFrame(data) converts web payloads into tabular format"
      },
      {
        id: "b",
        letter: "B",
        title: "Creating, inserting, updating and querying SQLite databases",
        video: "assets/videos/exp2-b.mp4",
        youtubeVideo: "",
        code: `import sqlite3
import pandas as pd

# Connect to SQLite database (creates file if not present)
conn = sqlite3.connect("Engineer.db")
curr = conn.cursor()

# Create table
curr.execute("""
CREATE TABLE IF NOT EXISTS Engineers (
    id INTEGER PRIMARY KEY,
    name TEXT,
    dept TEXT,
    marks INTEGER
)
""")
print("[OK] Table 'Engineers' verified.")

# Insert records
records = [
    (73, 'Arjun Reddy', 'CSE-DS', 94),
    (110, 'Bhuvan', 'AIML', 89),
    (1, 'Surya', 'CSE', 78)
]
curr.executemany("INSERT OR REPLACE INTO Engineers VALUES (?, ?, ?, ?)", records)
conn.commit()
print("[OK] Records inserted successfully.")

# Query all records into DataFrame
curr.execute("SELECT * FROM Engineers")
rows = curr.fetchall()
df = pd.DataFrame(rows, columns=["ID", "Name", "Dept", "Marks"])
print("\\n--- Current Database State ---")
print(df)

# Execute UPDATE transaction
curr.execute("UPDATE Engineers SET marks = 98 WHERE id = 73")
conn.commit()

# Read updated data directly with pandas
df_updated = pd.read_sql_query("SELECT * FROM Engineers", conn)
print("\\n--- Updated Database State ---")
print(df_updated)

conn.close()`,
        notes: "Key Points:\n- sqlite3 provides ACID-compliant serverless relational database support\n- Parameterized queries (? placeholders) protect against SQL injection\n- pd.read_sql_query executes SQL and loads directly into a DataFrame"
      }
    ]
  },
  {
    id: 3,
    name: "Data Cleaning, Transformation and Regular Expressions",
    tagline: "Handling missing values, categorical encoding, IQR outlier filtering, and regex text processing.",
    previewVideo: "assets/videos/exp3-preview.mp4",
    youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/karjunreddy/data-science-lab-mbu/tree/main/experiment-3",
    summary: "Raw data gathered from instruments, web crawlers, and legacy systems is inherently noisy and incomplete. This experiment implements standard preprocessing pipelines. Section A covers missing value detection (isna, notna) and remediation using dropna() and imputation via fillna(). Section B transforms categorical variables into numerical labels using map() and replace() for machine learning compatibility. Section C demonstrates statistical outlier detection using the Interquartile Range (IQR) technique, computing Q1, Q3, and lower/upper fences. Section D applies Python's re module for regular expression pattern matching, email and phone extraction, and string tokenization.",
    sections: [
      {
        id: "a",
        letter: "A",
        title: "Finding and handling missing values with dropna and fillna",
        video: "assets/videos/exp3-a.mp4",
        youtubeVideo: "",
        code: `import numpy as np
import pandas as pd

raw_data = {
    "Student": ["Arjun", "Kavya", "Harsha", "Sneha", "Rahul"],
    "Math_Marks": [92, np.nan, 85, np.nan, 78],
    "Lab_Marks": [95, 88, np.nan, np.nan, 82]
}
df = pd.DataFrame(raw_data)
print("--- Raw DataFrame with NaNs ---")
print(df)

print("\\n--- Missing Value Count per Column ---")
print(df.isna().sum())

# Strategy 1: Drop rows with any NaN
df_dropped = df.dropna()
print("\\n--- After dropna() ---")
print(df_dropped)

# Strategy 2: Impute missing values with column mean
df_filled = df.copy()
df_filled["Math_Marks"] = df_filled["Math_Marks"].fillna(df_filled["Math_Marks"].mean())
df_filled["Lab_Marks"] = df_filled["Lab_Marks"].fillna(0)
print("\\n--- After fillna() Imputation ---")
print(df_filled)`,
        notes: "Key Points:\n- isna().sum() quantifies missing values per feature\n- dropna() discards incomplete rows\n- fillna() imputes defaults or central tendency metrics (mean, median)"
      },
      {
        id: "b",
        letter: "B",
        title: "Categorical transformation and numeric encoding",
        video: "assets/videos/exp3-b.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

data = {
    "Student": ["Arjun", "Priya", "Rohan", "Sneha", "Vikram"],
    "Gender": ["male", "female", "male", "female", "male"],
    "Grade": ["A", "B", "A", "C", "B"]
}
df = pd.DataFrame(data)
print("--- Original Categorical Data ---")
print(df)

# Binary encoding with map
gender_mapping = {"male": 1, "female": 0}
df["Gender_Encoded"] = df["Gender"].map(gender_mapping)

# Ordinal encoding with replace
grade_mapping = {"A": 3, "B": 2, "C": 1}
df["Grade_Numeric"] = df["Grade"].replace(grade_mapping)

print("\\n--- Transformed Numeric DataFrame ---")
print(df)`,
        notes: "Key Points:\n- Machine learning models require numerical feature vectors\n- map() matches dictionary keys and returns NaN for unmapped items\n- replace() updates values in place"
      },
      {
        id: "c",
        letter: "C",
        title: "Outlier detection using Interquartile Range (IQR) method",
        video: "assets/videos/exp3-c.mp4",
        youtubeVideo: "",
        code: `import numpy as np
import pandas as pd

# Dataset with known extreme anomalies
data = {"Marks": [45, 54, 74, 82, 85, 89, 91, 94, 250]}  # 250 is an extreme outlier
df = pd.DataFrame(data)
print("--- Dataset ---")
print(df["Marks"].values)

# Calculate Q1 (25th percentile) and Q3 (75th percentile)
Q1 = df["Marks"].quantile(0.25)
Q3 = df["Marks"].quantile(0.75)
IQR = Q3 - Q1

# Define fences
lower_fence = Q1 - 1.5 * IQR
upper_fence = Q3 + 1.5 * IQR

print(f"\\nQ1: {Q1}, Q3: {Q3}, IQR: {IQR}")
print(f"Lower Fence: {lower_fence}, Upper Fence: {upper_fence}")

# Filter outliers
outliers = df[(df["Marks"] < lower_fence) | (df["Marks"] > upper_fence)]
clean_df = df[(df["Marks"] >= lower_fence) & (df["Marks"] <= upper_fence)]

print("\\n--- Identified Outliers ---")
print(outliers)
print("\\n--- Cleaned Data (Without Outliers) ---")
print(clean_df)`,
        notes: "Key Points:\n- IQR = Q3 - Q1 represents the dispersion of the central 50%\n- Points outside [Q1 - 1.5*IQR, Q3 + 1.5*IQR] are statistical outliers"
      },
      {
        id: "d",
        letter: "D",
        title: "Text pattern matching and extraction with Regular Expressions",
        video: "assets/videos/exp3-d.mp4",
        youtubeVideo: "",
        code: `import re

sample_text = """
Data Science Laboratory - MBU.
Contact faculty at bosubabu@mbu.asia or lab assistant at lab.cseds@mbu.edu.
Student Arjun Reddy (Roll 24102A030073) can be reached at 9848022338.
Alternate helpline: 8919952311. Code: MBU-DS-2026.
"""

print("--- Source Text ---")
print(sample_text.strip())

# Extract 10-digit phone numbers
phones = re.findall(r"\\b\\d{10}\\b", sample_text)
print("\\nExtracted Phone Numbers:", phones)

# Extract email addresses
emails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", sample_text)
print("Extracted Emails:", emails)

# Search roll number pattern (letters + digits)
roll_match = re.search(r"\\b\\d{5}[A-Z]\\d{6}\\b", sample_text)
if roll_match:
    print("Found MBU Roll Number:", roll_match.group())

# Mask sensitive contact numbers
masked_text = re.sub(r"\\b\\d{10}\\b", "XXXXXXXXXX", sample_text)
print("\\n--- Masked Text Output ---")
print(masked_text.strip())`,
        notes: "Key Points:\n- re.findall() returns all occurrences of a pattern\n- re.search() locates the first substring matching the regex\n- re.sub() replaces targeted regex expressions for data anonymization"
      }
    ]
  },
  {
    id: 4,
    name: "MultiIndex, Reshaping and Combining DataFrames",
    tagline: "Hierarchical MultiIndex structures, stack/unstack pivoting, and relational merges.",
    previewVideo: "assets/videos/exp4-preview.mp4",
    youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/karjunreddy/data-science-lab-mbu/tree/main/experiment-4",
    summary: "High-dimensional and grouped datasets require hierarchical indexing and structural reshaping. Section A constructs multi-level index (MultiIndex) structures on rows and columns, enabling advanced slicing using loc[] and xs(). Section B explores data pivoting and dimension folding with stack() (converting columns to inner index levels) and unstack() (expanding index levels back to columns). Section C implements SQL-like relational joins on DataFrames using pd.merge() across inner, left, right, and outer merge strategies, followed by missing data imputation via combine_first().",
    sections: [
      {
        id: "a",
        letter: "A",
        title: "Constructing and slicing hierarchical MultiIndex DataFrames",
        video: "assets/videos/exp4-a.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

# Multi-level index tuples (Department, Student)
departments = ["CSE-DS", "CSE-DS", "AIML", "CSE"]
students = ["Arjun", "Kavya", "Bhuvan", "Surya"]
marks = [95, 91, 88, 82]

index = pd.MultiIndex.from_arrays(
    [departments, students],
    names=["Department", "Student_Name"]
)

df = pd.DataFrame({"Score": marks}, index=index)
print("--- Hierarchical MultiIndex DataFrame ---")
print(df)

# Slicing top level
print("\\n--- Slicing 'CSE-DS' Department ---")
print(df.loc["CSE-DS"])

# Slicing specific cross-section
print("\\n--- Query specific record ('CSE-DS', 'Arjun') ---")
print(df.loc[("CSE-DS", "Arjun")])

# Resetting index back to standard columns
df_flat = df.reset_index()
print("\\n--- Reset to Flattened DataFrame ---")
print(df_flat)`,
        notes: "Key Points:\n- pd.MultiIndex organizes multi-dimensional attributes compactly\n- loc[] enables intuitive multi-level slicing\n- reset_index() flattens hierarchical indices into standard tabular columns"
      },
      {
        id: "b",
        letter: "B",
        title: "Reshaping data using stack() and unstack()",
        video: "assets/videos/exp4-b.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

# Wide format DataFrame
data = {
    "Data_Science": [94, 88],
    "Machine_Learning": [91, 85]
}
df = pd.DataFrame(data, index=["Arjun", "Harsha"])
print("--- Wide Format DataFrame ---")
print(df)

# Stack columns into index (wide -> long)
stacked = df.stack()
print("\\n--- Stacked (Long Format Series) ---")
print(stacked)

# Unstack back to columns (long -> wide)
unstacked = stacked.unstack()
print("\\n--- Unstacked (Restored Wide Format) ---")
print(unstacked)`,
        notes: "Key Points:\n- stack() pivots the column axis into the innermost row index\n- unstack() inverts the stacked series into a tabular DataFrame"
      },
      {
        id: "c",
        letter: "C",
        title: "Merging DataFrames with inner, left, right and outer joins",
        video: "assets/videos/exp4-c.mp4",
        youtubeVideo: "",
        code: `import pandas as pd

df1 = pd.DataFrame({
    "ID": [1, 2, 3, 4],
    "Name": ["Arjun", "Kavya", "Surya", "Sneha"]
})

df2 = pd.DataFrame({
    "ID": [1, 2, 3, 5],
    "Lab_Marks": [96, 92, 85, 88]
})

print("--- DataFrame 1 (Students) ---")
print(df1)
print("\\n--- DataFrame 2 (Grades) ---")
print(df2)

# Inner Join (Intersection)
inner = pd.merge(df1, df2, on="ID", how="inner")
print("\\n--- Inner Join (Common IDs 1, 2, 3) ---")
print(inner)

# Left Join (All from df1)
left = pd.merge(df1, df2, on="ID", how="left")
print("\\n--- Left Join ---")
print(left)

# Outer Join (Union)
outer = pd.merge(df1, df2, on="ID", how="outer")
print("\\n--- Outer Join (All IDs) ---")
print(outer)`,
        notes: "Key Points:\n- merge(..., on='ID') emulates SQL relational JOIN algebra\n- 'how' parameter toggles 'inner', 'left', 'right', and 'outer' unions"
      }
    ]
  },
  {
    id: 5,
    name: "Data Visualization with Matplotlib and Seaborn",
    tagline: "Statistical visual analytics across Iris dataset, subplots, bar plots, KDEs and box plots.",
    previewVideo: "assets/videos/exp5-preview.mp4",
    youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    githubLink: "https://github.com/karjunreddy/data-science-lab-mbu/tree/main/experiment-5",
    summary: "Visual analytics is the cornerstone of exploratory data investigation and storytelling. Experiment 5 deploys matplotlib and seaborn to visualize complex multi-attribute distributions. Part A analyzes the Fisher Iris dataset across line graphs, scatter plots, histograms with KDE overlays, and multi-variable pair plots. Part B engineers multi-panel subplots with custom annotations and high-res figure exports. Sections B(i) and B(ii) produce grouped and stacked bar charts. Sections C, D, and E investigate univariate distribution fitting, bivariate Pearson correlation coefficients, and categorical box plots by department.",
    sections: [
      {
        id: "a",
        letter: "A",
        title: "Iris dataset profiling with line, scatter, histogram and pairplot",
        video: "assets/videos/exp5-a.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load Iris dataset from public CDN
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)

print("--- Iris Dataset Head ---")
print(df.head())
print("\\n--- Dataset Summary Info ---")
print(df.describe())

# 1. Line Plot
plt.figure(figsize=(7, 4))
plt.plot(df.index, df["sepal_length"], label="Sepal Length", color="#00f2fe")
plt.plot(df.index, df["petal_length"], label="Petal Length", color="#ffd200")
plt.xlabel("Sample Index")
plt.ylabel("Measurement (cm)")
plt.title("Iris Sepal vs Petal Length")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# 2. Seaborn Scatter Plot with Species Hue
plt.figure(figsize=(7, 4))
sns.scatterplot(data=df, x="sepal_length", y="petal_length", hue="species", palette="viridis")
plt.title("Sepal Length vs Petal Length by Species")
plt.tight_layout()
plt.show()`,
        notes: "Key Points:\n- matplotlib.pyplot builds foundational 2D coordinate canvases\n- seaborn elevates aesthetic styling and automates categorical color encoding (hue)"
      },
      {
        id: "b",
        letter: "B",
        title: "Multi-panel subplots with annotations and file export",
        video: "assets/videos/exp5-b.mp4",
        youtubeVideo: "",
        code: `import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

fig, ax = plt.subplots(2, 1, figsize=(8, 7), sharex=True)

# Top Subplot: Sales
ax[0].plot(months, sales, marker="o", color="#00d2ff", linewidth=2, label="Sales")
ax[0].set_title("Monthly Sales Trend")
ax[0].set_ylabel("Revenue ($K)")
ax[0].annotate("Peak Sales", xy=(5, 250), xytext=(3.5, 260),
               arrowprops=dict(facecolor="#ffd200", arrowstyle="->", lw=1.5))
ax[0].legend()
ax[0].grid(True, alpha=0.3)

# Bottom Subplot: Expenses
ax[1].plot(months, expenses, marker="s", color="#ff5370", linewidth=2, label="Expenses")
ax[1].set_title("Monthly Operating Expenses")
ax[1].set_xlabel("Fiscal Month")
ax[1].set_ylabel("Expenses ($K)")
ax[1].legend()
ax[1].grid(True, alpha=0.3)

plt.suptitle("Mohan Babu University - Financial Analysis Subplots", fontsize=13)
plt.tight_layout()
plt.savefig("monthly_sales_expenses.png", dpi=300, bbox_inches="tight")
plt.show()
print("[OK] Figure exported to 'monthly_sales_expenses.png' at 300 DPI.")`,
        notes: "Key Points:\n- plt.subplots(rows, cols) creates shared coordinate panels\n- annotate() points arrows at specific data coordinates"
      },
      {
        id: "bi",
        letter: "B(i)",
        title: "Grouped bar plot for comparative student evaluation",
        video: "assets/videos/exp5-bi.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt

data = {
    "Python": [88, 92, 79, 95],
    "Data_Science": [94, 85, 82, 90],
    "Database": [82, 89, 86, 91]
}
students = ["Arjun", "Kavya", "Sneha", "Rohan"]
df = pd.DataFrame(data, index=students)

print("--- Marks Matrix ---")
print(df)

# Render grouped bar chart directly via pandas
df.plot(kind="bar", figsize=(8, 4.5), colormap="cool")
plt.title("Subject Marks Comparison Across Students")
plt.xlabel("Student")
plt.ylabel("Score (100)")
plt.xticks(rotation=0)
plt.legend(title="Course Subject")
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.show()`,
        notes: "Key Points:\n- df.plot(kind='bar') clusters columns side-by-side for grouped visual comparison"
      },
      {
        id: "bii",
        letter: "B(ii)",
        title: "Stacked bar plot for cumulative score analysis",
        video: "assets/videos/exp5-bii.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt

data = {
    "Internal": [28, 26, 29, 27],
    "Lab_Exam": [48, 45, 50, 46],
    "Viva": [18, 19, 20, 17]
}
students = ["Arjun", "Kavya", "Sneha", "Rohan"]
df = pd.DataFrame(data, index=students)

# Render stacked bar chart
df.plot(kind="bar", stacked=True, figsize=(8, 4.5), color=["#4facfe", "#00f2fe", "#43e97b"])
plt.title("Cumulative Assessment Distribution (Stacked)")
plt.xlabel("Student")
plt.ylabel("Total Composite Marks")
plt.xticks(rotation=0)
plt.legend(title="Assessment Component")
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.show()`,
        notes: "Key Points:\n- stacked=True piles component bars atop one another to communicate part-to-whole totals"
      },
      {
        id: "c",
        letter: "C",
        title: "Histogram distribution with Kernel Density Estimation (KDE)",
        video: "assets/videos/exp5-c.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

marks = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95]
df = pd.DataFrame({"Marks": marks})

fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# Histogram with bins
sns.histplot(df["Marks"], bins=6, color="#00d2ff", ax=axes[0])
axes[0].set_title("Histogram (6 Bins)")
axes[0].set_xlabel("Marks")

# Kernel Density Estimate
sns.kdeplot(df["Marks"], fill=True, color="#9d4edd", ax=axes[1])
axes[1].set_title("Smoothed Probability Density (KDE)")
axes[1].set_xlabel("Marks")

plt.tight_layout()
plt.show()`,
        notes: "Key Points:\n- histplot discretizes data into bin counts\n- kdeplot computes non-parametric Gaussian kernel estimates of continuous distribution shapes"
      },
      {
        id: "d",
        letter: "D",
        title: "Bivariate scatter plot with Pearson correlation coefficient",
        video: "assets/videos/exp5-d.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt

study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 94]
df = pd.DataFrame({"Study_Hours": study_hours, "Marks": marks})

# Scatter Plot
plt.figure(figsize=(7, 4))
plt.scatter(df["Study_Hours"], df["Marks"], color="#00e699", s=70, edgecolors="white")
plt.title("Study Hours vs Academic Performance")
plt.xlabel("Weekly Study Hours")
plt.ylabel("Obtained Marks")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# Pearson Correlation
r = df["Study_Hours"].corr(df["Marks"])
print("Pearson Correlation Coefficient (r):", round(r, 4))`,
        notes: "Key Points:\n- Pearson's r measures linear relationship between two continuous variables (-1 to +1)"
      },
      {
        id: "e",
        letter: "E",
        title: "Categorical box-and-whisker plot by department",
        video: "assets/videos/exp5-e.mp4",
        youtubeVideo: "",
        code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = {
    "Department": ["CSE-DS", "CSE-DS", "CSE-DS", "CSE-DS", "CSE-DS",
                   "AIML", "AIML", "AIML", "AIML", "AIML",
                   "CSE", "CSE", "CSE", "CSE", "CSE"],
    "Marks": [78, 85, 94, 72, 88, 65, 70, 82, 75, 80, 60, 68, 72, 76, 85]
}
df = pd.DataFrame(data)

plt.figure(figsize=(7, 4.5))
sns.boxplot(x="Department", y="Marks", data=df, palette="mako")
plt.title("Academic Marks Distribution Across Departments")
plt.grid(axis="y", linestyle="--", alpha=0.5)
plt.tight_layout()
plt.show()`,
        notes: "Key Points:\n- Box plots illustrate the five-number summary: minimum, Q1, median, Q3, and maximum with outlier fences"
      }
    ]
  }
];

/* -------------------------------------------------------------------------
   4. COURSE MODULES (1 TO 5) - SYLLABUS, HEADINGS & CORE THEORY
   Extracted from Mohan Babu University 22DS102006 Curriculum
   ------------------------------------------------------------------------- */
var courseModules = [
  {
    id: 1,
    number: "Module 1",
    title: "Introduction to Data Science & Exploratory Foundations",
    badge: "Foundations",
    summary: "Fundamental definition of Data Science, the 3Vs of big data, multi-disciplinary skillsets, tools ecosystem (Python, R, SQL, UNIX), structured vs unstructured data collections, preprocessing techniques, and the 6 core analytics paradigms.",
    topics: [
      {
        heading: "1. Definition of Data Science",
        content: "Data Science (DS) is the study and practice of collecting, storing, processing, and analyzing data to extract meaningful insights and support data-driven decision-making. It combines computer science, statistics, mathematics, and domain expertise through systematic, repeatable, and verifiable processes.",
        highlights: [
          "The 3Vs of Data: Volume (massive amounts e.g., zettabytes), Velocity (speed of data generation), and Variety (structured, semi-structured, and unstructured formats).",
          "By 2020, global data volume expanded past 40 zettabytes—a 50-fold increase in 10 years."
        ]
      },
      {
        heading: "2. Real-World Applications of Data Science",
        content: "Data Science powers transformative intelligence across modern industries:",
        highlights: [
          "Finance: Fraud detection, credit risk assessment, algorithmic trading, customer segmentation.",
          "Public Policy & Urban Planning: Traffic flow optimization, open data platforms (data.gov), smart city sensor networks.",
          "Healthcare: Disease diagnosis, personalized medicine, wearable physiological monitoring.",
          "Business & E-Commerce: Product recommendations (Amazon, Netflix), demand forecasting, churn mitigation.",
          "Industrial Operations: Predictive maintenance via IoT telemetry, supply chain quality assurance."
        ]
      },
      {
        heading: "3. Essential Skills & Industry Roles",
        content: "Core capabilities include: (a) Willingness to Experiment, (b) Mathematical Reasoning & Statistics, and (c) Data Literacy.",
        highlights: [
          "Data Analyst: Descriptive reporting, SQL querying, dashboards (Tableau, PowerBI).",
          "Data Engineer: Infrastructure pipelines, ETL, distributed databases, large unstructured datasets.",
          "Data-Product Focused Scientist: Machine learning products (recommendation engines, predictive APIs).",
          "Generalist Data Scientist: End-to-end capabilities spanning modeling, statistics, and business insight."
        ]
      },
      {
        heading: "4. Primary Data Science Tools Ecosystem",
        content: "Industry standard tools and programming languages:",
        highlights: [
          "Python: High-level scripting with Pandas (manipulation), NumPy (numerical), Matplotlib/Seaborn (visualization), scikit-learn (ML).",
          "R: Statistical computing, hypothesis testing, ggplot2, CRAN packages, RMarkdown.",
          "SQL: Relational database queries, schema joins, aggregations for datasets exceeding memory.",
          "UNIX Shell: CLI stream piping, automation, batch processing, log parsing."
        ]
      },
      {
        heading: "5. Data Formats & Collections",
        content: "Data classification into Structured (relational tables, labeled columns/rows) vs Unstructured (free text, speech, audio, video).",
        highlights: [
          "Open Data: Freely accessible public data under open licenses (timely, complete, described, machine-readable).",
          "Social Media & APIs: REST endpoints, JSON/XML payloads, developer feeds.",
          "Multimodal Data: IoT streams, brain imaging (EEG, fMRI) analyzed via Statistical Parametric Mapping (SPM).",
          "Storage Formats: CSV (comma-separated), TSV (tab-separated), XML (hierarchical tags), and RSS feeds."
        ]
      },
      {
        heading: "6. Data Preprocessing & 6 Analytics Paradigms",
        content: "Techniques for cleaning 'dirty' data (missing entries, noise, schema mismatches) and the 6 analytics lifecycle stages:",
        highlights: [
          "Preprocessing: Cleaning, Munging (Wrangling), Missing Value Imputation, Outlier Smoothing, Integration, Reduction (PCA), and Discretization.",
          "Descriptive Analytics: Quantifies 'what happened' (Mean, Median, Mode, Variance, Standard Deviation, Skewness, Kurtosis).",
          "Diagnostic Analytics: Investigates 'why it happened' (causal analysis, Pearson correlation -1 to +1).",
          "Predictive Analytics: Forecasts 'what will happen' using probabilistic modeling and regression.",
          "Prescriptive Analytics: Recommends 'what action to take' via simulations and optimization.",
          "Exploratory Data Analysis (EDA): Open-ended visual exploration of hidden structures.",
          "Mechanistic Analysis: Deterministic physical/engineering modeling (y = β0 + β1*x)."
        ]
      }
    ]
  },
  {
    id: 2,
    number: "Module 2",
    title: "Data Extraction, Feature Engineering & Tree Algorithms",
    badge: "Feature Selection & Trees",
    summary: "Industry perspectives on data extraction (Kaggle vs Google), feature selection methodologies, stepwise regression, user retention modeling, information entropy, decision tree algorithms, Random Forests, SVD, and PCA.",
    topics: [
      {
        heading: "1. Perspectives on Data Meaning",
        content: "William Cukierski (Kaggle) emphasizes competitive crowdsourced feature extraction/selection and iterative model refinement ('leapfrogging' in economic, technological, and innovation contexts). David Huffaker (Google) advocates mixed-methods combining qualitative user observations with quantitative predictive analytics, retention modeling, and data privacy ethics.",
        highlights: [
          "Feature Extraction: Converting raw data into clean, structured, informative representations.",
          "Feature Selection: Isolating the highest-yield subset of attributes to minimize model overfitting and boost inference speed."
        ]
      },
      {
        heading: "2. Feature Selection Strategies",
        content: "Four recognized architectures for feature curation:",
        highlights: [
          "Filter Methods: Statistical rankings independent of algorithms (correlation coefficients, chi-square, mutual information).",
          "Wrapper Methods: Model-based subset searches (Recursive Feature Elimination - RFE).",
          "Embedded Methods: Feature penalties integrated directly inside model optimization (Lasso L1 regularization).",
          "Stepwise Regression: Forward selection (adds one by one), Backward elimination (prunes least impactful), and Bidirectional stepwise search.",
          "Model Evaluation Metrics: R-squared, P-values, AIC (Akaike), BIC (Bayesian Information Criterion), Adjusted R²."
        ]
      },
      {
        heading: "3. Information Entropy & Decision Trees",
        content: "Entropy measures the disorder or impurity in a distribution. For a binary outcome X: H(X) = -p1*log2(p1) - p0*log2(p0). Peak entropy is 1 bit (maximum uncertainty when p=0.5); minimum is 0 bits (pure class).",
        highlights: [
          "Decision Tree Architecture: Root Node (highest information gain), Internal Split Nodes, Branches, and Leaf Nodes (final target class).",
          "Information Gain: Reduction in entropy achieved after splitting by an attribute.",
          "Continuous Feature Splitting: Threshold partitioning where continuous numbers are partitioned into optimal binary boundaries."
        ]
      },
      {
        heading: "4. Ensemble Learning: Random Forests",
        content: "Random Forest combines multiple unpruned decision trees via Bagging (Bootstrap Aggregation) with random feature subsampling.",
        highlights: [
          "Bootstrap Sampling: Training each tree on a random sample drawn with replacement (~80% of dataset).",
          "Hyperparameters: Number of Trees (N) and Number of Features per split (F).",
          "Advantages: High predictive accuracy, resistance to overfitting, automatic feature importance estimation.",
          "Disadvantages: Higher computational cost and reduced interpretability compared to a single tree."
        ]
      },
      {
        heading: "5. Dimensionality Reduction: SVD & PCA",
        content: "Matrix decomposition techniques that capture high-variance latent structures in reduced dimensional space.",
        highlights: [
          "Singular Value Decomposition (SVD): Decomposes matrix X into X = U * S * V^T, where U and V are orthogonal singular vector matrices and S is a diagonal singular value matrix. Enables low-rank matrix approximation and data compression.",
          "Principal Component Analysis (PCA): Projects correlated high-dimensional features onto orthogonal, uncorrelated 'principal components' that maximize variance and minimize reconstruction mean squared error."
        ]
      }
    ]
  },
  {
    id: 3,
    number: "Module 3",
    title: "Plotting and Visualization Ecosystem",
    badge: "Visualization",
    summary: "Visual analytics primer, matplotlib architecture (Figure, Subplots, adjustments), styling (colors, markers, line styles, ticks, legends, annotations), pandas & seaborn high-level charting, and complete classification of charts.",
    topics: [
      {
        heading: "1. Matplotlib Architecture & Subplot Controls",
        content: "Created by John Hunter (2002), matplotlib provides fine-grained 2D visualization control closely integrated with Jupyter and IPython.",
        highlights: [
          "Figure and Subplot Hierarchy: plt.figure() creates top-level container; fig.add_subplot(2, 2, 1) or plt.subplots(r, c) creates axes arrays.",
          "Subplot Spacing: plt.subplots_adjust(wspace=..., hspace=...) fine-tunes horizontal and vertical inter-plot spacing.",
          "Plot Exporting: plt.savefig('filename.png', dpi=300, bbox_inches='tight') writes publication-grade figures."
        ]
      },
      {
        heading: "2. Plot Customization: Styling, Ticks & Legends",
        content: "Matplotlib supports procedural (pyplot) and object-oriented (AxesSubplot) methods for styling and annotations.",
        highlights: [
          "Format Strings & Keyword Arguments: 'g--' for green dashed line, marker='o', color='#00d2ff'.",
          "Axis Ticks & Labels: set_xticks(), set_xticklabels(..., rotation=30), set_xlabel(), set_title().",
          "Legends & Patches: ax.legend(loc='best'); geometric overlays using matplotlib.patches (Rectangle, Circle, Polygon).",
          "Annotations: ax.annotate('text', xy=(x, y), xytext=(x2, y2), arrowprops=dict(arrowstyle='->'))."
        ]
      },
      {
        heading: "3. Pandas & Seaborn High-Level Interfaces",
        content: "pandas provides direct .plot() methods on Series and DataFrames, while Michael Waskom's seaborn simplifies complex multi-variable statistical plots.",
        highlights: [
          "Line Graphs: Default plot() for trends across sample index or time periods.",
          "Bar Charts: plot.bar() and plot.barh() with stacked=True for cumulative part-to-whole comparisons.",
          "Seaborn Visuals: sns.scatterplot(hue='category'), sns.histplot(kde=True), sns.boxplot(), and sns.pairplot()."
        ]
      },
      {
        heading: "4. Comprehensive Chart Types & Optimal Use Cases",
        content: "Selecting the right visual for analytical storytelling:",
        highlights: [
          "Line Graph: Demonstrating continuous temporal trends.",
          "Bar / Column Chart: Comparing discrete categorical metrics side-by-side.",
          "Pie Chart: Depicting proportional slices of a 100% whole (best for < 5 categories).",
          "Area Chart: Emphasizing cumulative volume over time.",
          "Scatter Plot: Revealing correlation (Positive, Negative, Null) between two continuous variables.",
          "Bubble Chart: Depicting 3 numerical dimensions (X, Y, and bubble diameter).",
          "Violin & Swarm Plots: Displaying multi-modal density distributions without point overlap.",
          "Geographic & Network Visualizations: Choropleths, heatmaps (folium, geopandas) and network graphs (networkx, pyvis)."
        ]
      }
    ]
  },
  {
    id: 4,
    number: "Module 4",
    title: "Statistical Thinking, Distributions & Indexing",
    badge: "Statistics & Math",
    summary: "Histogram representation, outlier detection criteria, central tendency, measures of dispersion, distribution skewness and kurtosis, Probability Mass Functions (PMF), Cumulative Distribution Functions (CDF), Class Size Paradox, and DataFrame indexing.",
    topics: [
      {
        heading: "1. Distributions & Frequency Histograms",
        content: "Histograms summarize empirical frequency distributions by partitioning continuous data into non-overlapping bins. In Python: plt.hist(data, bins=30, edgecolor='black').",
        highlights: [
          "Binning Tradeoffs: Excessively wide bins smooth out valuable nuances; overly narrow bins introduce noisy spikes.",
          "Shape Identification: Reveals symmetry, unimodal/bimodal patterns, and skewness."
        ]
      },
      {
        heading: "2. Outliers, Central Tendency & Dispersion",
        content: "Outlier values distort statistical inference and machine learning training. Identification techniques include sorting, visual inspection, Z-scores, and the IQR fences rule.",
        highlights: [
          "Central Tendency: Mean (arithmetic average, sensitive to outliers), Median (middle value, robust for skewed data), Mode (most frequent).",
          "Measures of Spread: Range (max - min), Variance (population σ² vs sample s² with n-1 degrees of freedom), Standard Deviation (square root of variance in native units), IQR (Q3 - Q1).",
          "Shape Metrics: Skewness (positive = tail on right, negative = tail on left); Kurtosis (tailedness and presence of heavy outlier tails)."
        ]
      },
      {
        heading: "3. Probability Functions: PMF vs CDF",
        content: "Discrete and continuous representations of random variables:",
        highlights: [
          "Probability Mass Function (PMF): Normalized frequency distribution where each bin count is divided by sample size n. Constraint: susceptible to random noise when sample sizes are small.",
          "Cumulative Distribution Function (CDF): Probability that variable X takes a value less than or equal to x: F(x) = P(X ≤ x). Smooth monotonic step function bounded between [0, 1], representing percentile ranks directly without binning artifacts."
        ]
      },
      {
        heading: "4. The Class Size Paradox & Random Sampling",
        content: "A statistical anomaly caused by sampling bias: the average class size calculated across all classes (e.g. 20) is significantly smaller than the average class size experienced by individual students (e.g. 23.3) because larger classes contain disproportionately more student observers.",
        highlights: [
          "Sampling Bias: Occurs whenever sampling units are individuals rather than equal groups.",
          "Pseudo-Random Numbers: Generated algorithmically via seed values for simulation, cross-validation data splitting (np.random.normal, randint, shuffle)."
        ]
      },
      {
        heading: "5. Parametric Continuous Distributions & Indexing",
        content: "Standard distributions in data modeling:",
        highlights: [
          "Exponential Distribution: Models time between independent Poisson events: f(x) = λ*e^(-λ*x). Key property: Memoryless.",
          "Normal (Gaussian) Distribution: Symmetric bell curve characterized by mean μ and standard deviation σ. Empirical 68-95-99.7% rule.",
          "Lognormal Distribution: Continuous distribution whose natural logarithm is normally distributed; right-skewed and non-negative.",
          "DataFrame Indexing: .loc[] for label-based lookup, .iloc[] for integer coordinate offset, Boolean masks for conditional queries, and set_index() for fast index indexing."
        ]
      }
    ]
  },
  {
    id: 5,
    number: "Module 5",
    title: "Time Series Analysis & Predictive Modeling",
    badge: "Time Series & ML",
    summary: "Temporal data properties (trend, seasonality, cyclicality, irregularity), time series forecasting algorithms (AR, ARIMA, SARIMA, VAR, LSTMs, HMMs), data cleaning & resampling, moving averages (SMA vs EMA), autocorrelation, and predictive model evaluation metrics.",
    topics: [
      {
        heading: "1. Time Series Fundamentals & Temporal Decomposition",
        content: "A time series is a sequence of observations recorded at successive, uniform time intervals (hourly, daily, monthly).",
        highlights: [
          "Core Components: (1) Trend (long-term directional movement), (2) Seasonality (deterministic periodic cycles within a fixed timeframe), (3) Cyclicality (fluctuations without fixed intervals), and (4) Irregularity (unscheduled noise/shocks).",
          "Data Categories: Stock Series (instantaneous state snapshot) vs Flow Series (aggregate activity accumulated over an interval).",
          "Business Value: Demand forecasting, risk mitigation, capacity planning, and competitive strategic advantage."
        ]
      },
      {
        heading: "2. Time Series Forecasting Algorithms",
        content: "Ecosystem of mathematical and machine learning forecasting models:",
        highlights: [
          "Autoregressive AR(p): Linear combination of p previous historical lags plus error.",
          "ARIMA(p, d, q): Autoregressive Integrated Moving Average combining lag terms (p), differencing for non-stationarity (d), and moving average errors (q).",
          "SARIMA / SARIMAX: Seasonal ARIMA augmented with seasonal parameters (P, D, Q) and exogenous explanatory features (X).",
          "Vector Autoregression (VAR): Multivariate system modeling bidirectional feedback between multiple interdependent time series.",
          "Exponential Smoothing (SES, Holt-Winters): Decreasing exponential weights for historical records.",
          "Deep Learning & Ensembles: LSTMs, GRUs, Recurrent Neural Networks, Gradient Boosting (GBM), and Hidden Markov Models (HMM)."
        ]
      },
      {
        heading: "3. Time Series Data Preparation & Moving Averages",
        content: "Importing time series with pandas: pd.read_csv('data.csv', parse_dates=['Date'], index_col='Date') and resampling with .asfreq() or .resample().",
        highlights: [
          "Simple Moving Average (SMA): Arithmetic mean of past N periods: df['SMA_3'] = df['Value'].rolling(window=3).mean().",
          "Exponential Moving Average (EMA): Places heavier smoothing weights on recent observations: α = 2 / (N + 1). df['EMA_3'] = df['Value'].ewm(span=3).mean().",
          "Missing Value Remediation: Forward fill (ffill), backward fill (bfill), and linear interpolation (df.interpolate(method='linear')).",
          "Serial Correlation & Autocorrelation: Lagged correlation between a time series and itself shifted by k periods (autocorrelation +1 indicates strong persistence)."
        ]
      },
      {
        heading: "4. Predictive Modeling Pipeline & Evaluation Metrics",
        content: "Predictive analytics utilizes machine learning algorithms trained on historical data to classify outcomes or predict continuous values. Best practice requires an 80/20 train-test split, feature engineering (e.g., BMI from height and weight), and rigorous metric validation.",
        highlights: [
          "Classification Confusion Matrix: True Positive (TP), True Negative (TN), False Positive (FP), False Negative (FN).",
          "Accuracy: (TP + TN) / Total. Can be misleading on imbalanced classes.",
          "Precision: TP / (TP + FP) — proportion of positive predictions that were correct.",
          "Recall (Sensitivity): TP / (TP + FN) — proportion of actual positive cases detected.",
          "F1-Score: 2 * (Precision * Recall) / (Precision + Recall) — harmonic mean balancing precision and recall.",
          "ROC Curve & AUC: Area Under the Receiver Operating Characteristic curve (1.0 = perfect classifier, 0.5 = random guess).",
          "Regression Metrics: Mean Squared Error (MSE), Root Mean Squared Error (RMSE = sqrt(MSE)), Mean Absolute Error (MAE), and R² / Adjusted R².",
          "Sentiment Analysis & NLP: Opinion mining, keyword polarity extraction, brand monitoring, and customer sentiment analytics."
        ]
      }
    ]
  }
];

/* -------------------------------------------------------------------------
   5. EXPORT FOR NODE / BROWSER COMPATIBILITY
   ------------------------------------------------------------------------- */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    university,
    laboratory,
    labMeta,
    student,
    experiments,
    courseModules
  };
}
