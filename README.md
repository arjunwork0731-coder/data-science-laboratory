# Mohan Babu University — Data Science Laboratory Portal (22DS102006)

A modern, responsive, and interactive digital laboratory portal built for **Mohan Babu University (MBU)**, Department of Computer Science & Engineering (Data Science).

---

## 👨‍🎓 Student Identity
- **Name:** K ARJUN REDDY
- **Roll Number (ID):** 24102A030073
- **Section:** CSE-DS-2
- **Faculty:** S. Bosu Babu
- **Profession:** Assistant Professor
- **Course & Subject Code:** Data Science Laboratory (`22DS102006`)
- **Institution:** Mohan Babu University, Tirupati

---

## 🧭 Page Flow & Architecture

The portal strictly implements the university laboratory workflow:

```
MAIN PAGE (Page 1)
   ↓ (Click '+ ADD' or any experiment card)
EXPERIMENT PREVIEW (Page 2)
   ↓ (10-second hover-to-play video + Click 'Overview')
EXPERIMENT DETAILS (Page 3)
   ↓ (Preview video + Click any section A / B / C / D / E / F...)
INDIVIDUAL SECTION (Page 4)
   ↓ (Section Video + Independently Scrollable Code Box + '▶ Run Code' interactive engine)
```

### Key Highlights
1. **University Central Card (Page 1):** Official Mohan Babu University branding, logo, subject code `22DS102006`, and an instant experiment search bar with live autocomplete.
2. **Student ID Card (Right side):** Centered photo area, displaying student fields in the exact requested order:
   - Name: `K ARJUN REDDY`
   - ID Number: `24102A030073`
   - Section: `CSE-DS-2`
   - Faculty: `S. Bosu Babu`
   - Profession: `Assistant Professor`
3. **Dynamic Experiments & Sections:** 5 comprehensive experiments supporting dynamic section counts (`A`, `B`, `C`...):
   - **Experiment 1:** Import and Export in CSV, JSON and Excel Formats (Parts A, B, C)
   - **Experiment 2:** Web Data, APIs and SQL Integration (Parts A, B)
   - **Experiment 3:** Data Cleaning, Transformation and Regular Expressions (Parts A, B, C, D)
   - **Experiment 4:** MultiIndex, Reshaping and Combining DataFrames (Parts A, B, C)
   - **Experiment 5:** Data Visualization with Matplotlib and Seaborn (Parts A, B, B(i), B(ii), C, D, E)
4. **Course Theory Modules (1 to 5):** Complete syllabus coverage extracted from the 22DS102006 curriculum:
   - **Module 1:** Introduction to Data Science, 3Vs, skills, tools ecosystem, data types, preprocessing, 6 analytics paradigms.
   - **Module 2:** Data Extraction, Feature Selection (Filter, Wrapper, Embedded), Information Entropy, Decision Trees, Random Forests, SVD & PCA.
   - **Module 3:** Plotting and Visualization (Matplotlib API, subplots, annotations, Pandas & Seaborn plotting, chart taxonomy).
   - **Module 4:** Statistical Thinking (Distributions, Histograms, Outliers, Central Tendency, Dispersion, PMF, CDF, Class Size Paradox).
   - **Module 5:** Time Series Analysis & Predictive Modeling (Trends, Seasonality, ARIMA, VAR, Moving Averages, Confusion Matrix, ROC-AUC, Sentiment Analysis).
5. **Interactive In-Browser Code Runner:** Execute Python code right inside your browser powered by WebAssembly (Pyodide) and instant simulation fallbacks.
6. **Independent Vertical Code Scrolling:** The code display area scrolls independently so long code never shifts or disrupts the webpage layout.

---

## 📷 How to Add Your Student Photo

To set your real photograph:
1. Save your photo as `student-photo.jpg` in the `assets/img/` folder.
2. Open `assets/js/data.js` and ensure:
   ```javascript
   student.photo = "assets/img/student-photo.jpg";
   ```
3. Refresh your browser!

---

## 🚀 How to Push to GitHub & Deploy to GitHub Pages

### Step 1: Initialize Git and Commit
Open a terminal in this project folder (`d:\digital library`) and run:
```bash
git init
git add .
git commit -m "Initial commit: Mohan Babu University Data Science Lab Portal for K Arjun Reddy"
```

### Step 2: Create a Repository on GitHub
1. Log in to [GitHub](https://github.com/).
2. Click **New Repository** and name it `data-science-laboratory-website` (or `digital-library`).
3. Set visibility to **Public**.
4. Do not initialize with README (we already have one).

### Step 3: Link & Push
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/data-science-laboratory-website.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
1. In your GitHub repository, navigate to **Settings** → **Pages** (under Code and automation).
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**.
5. Your website will be live in 1–2 minutes at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/data-science-laboratory-website/`

---

## 💻 Local Testing

You can run any local web server to test locally:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080/`
