/* General Body and Container Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #1a1a2e; /* Dark blue/purple background */
    color: #e0e0e0; /* Light grey for text */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}

.container {
    background: linear-gradient(145deg, #2a2a4a, #1f1f3a); /* Subtle gradient for depth */
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); /* Deeper shadow for dark theme */
    width: 100%;
    max-width: 1400px; /* Increased max-width for more columns */
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.05); /* Subtle border */
}

h1, h2 {
    color: #8be9fd; /* Bright light blue/cyan for headings */
    text-align: center;
    margin-bottom: 25px;
    text-shadow: 0 0 10px rgba(139, 233, 253, 0.3); /* Soft glow for headings */
}

p {
    line-height: 1.6;
    color: #bbbbbb;
}

.warning-message {
    text-align: center;
    color: #ffb86c; /* Warm orange for warnings */
    font-weight: bold;
    background-color: #3a2e1a; /* Darker background for warning */
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 25px;
    border: 1px solid #ffb86c;
}

/* --- Tabs Styling --- */
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    border-bottom: 2px solid #33334d; /* Darker border for tabs */
}

.tab-button {
    background-color: transparent;
    border: none;
    padding: 12px 25px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    color: #bbbbbb; /* Lighter grey for inactive tabs */
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
}

.tab-button:hover {
    color: #8be9fd; /* Bright blue on hover */
    background-color: rgba(139, 233, 253, 0.05); /* Very subtle hover background */
}

.tab-button.active {
    color: #8be9fd; /* Active tab bright blue */
    border-bottom: 3px solid #8be9fd;
    background-color: #2a2a4a; /* Darker background for active tab */
    border-radius: 8px 8px 0 0; /* Rounded top corners */
}

.tab-content {
    display: none;
    padding: 20px 0;
}

.tab-content.active {
    display: block;
}

/* --- Form Elements & Buttons --- */
label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #8be9fd; /* Bright blue for labels */
}

input[type="text"],
input[type="date"],
select,
textarea {
    width: calc(100% - 20px);
    padding: 8px 10px;
    margin-bottom: 10px;
    border: 1px solid #4a4a6e; /* Darker border */
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 0.95em;
    background-color: #2a2a4a; /* Dark background for inputs */
    color: #e0e0e0; /* Light text color */
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input[type="text"]:focus,
input[type="date"]:focus,
select:focus,
textarea:focus {
    border-color: #8be9fd; /* Bright blue border on focus */
    box-shadow: 0 0 0 2px rgba(139, 233, 253, 0.2); /* Soft blue glow on focus */
    outline: none;
}

input[type="checkbox"] {
    transform: scale(1.3);
    margin-right: 8px;
    vertical-align: middle;
    cursor: pointer;
    accent-color: #8be9fd; /* Bright blue checkmark */
}

button {
    background-color: #8be9fd; /* Main action button color */
    color: #1a1a2e; /* Dark text for bright button */
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    margin-right: 10px;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(139, 233, 253, 0.2);
}

button:hover {
    background-color: #6ed0e6; /* Slightly darker on hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 233, 253, 0.3);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(139, 233, 253, 0.15);
}

/* Specific button colors */
#exportDataBtn, #importDataBtn {
    background-color: #f1fa8c; /* Yellow for export/import */
    color: #1a1a2e;
    box-shadow: 0 4px 15px rgba(241, 250, 140, 0.2);
}
#exportDataBtn:hover, #importDataBtn:hover {
    background-color: #e0e67b;
    box-shadow: 0 6px 20px rgba(241, 250, 140, 0.3);
}
#clearDataBtn {
    background-color: #ff79c6; /* Pink for clear data */
    color: #1a1a2e;
    box-shadow: 0 4px 15px rgba(255, 121, 198, 0.2);
}
#clearDataBtn:hover {
    background-color: #e668b0;
    box-shadow: 0 6px 20px rgba(255, 121, 198, 0.3);
}

/* --- Dashboard & Progress --- */
#examCountdown {
    font-size: 1.3em;
    font-weight: bold;
    color: #ff6e6e; /* Red for countdown */
    text-align: center;
    margin-bottom: 20px;
}

.progress-container {
    width: 100%;
    background-color: #33334d; /* Darker background for progress track */
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
    height: 25px;
}

.progress-bar {
    height: 100%;
    background-color: #50fa7b; /* Bright green for progress */
    border-radius: 8px;
    text-align: center;
    line-height: 25px;
    color: #1a1a2e; /* Dark text for bright bar */
    width: 0%;
    transition: width 0.5s ease-out;
    font-weight: bold;
    font-size: 0.9em;
}

#overallProgress, #subjectProgress {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #2a2a4a;
    border-radius: 10px;
    box-shadow: inset 0 1px 5px rgba(0,0,0,0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

#subjectProgress h4 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #bd93f9; /* Purple for subject titles */
    font-size: 1.1em;
}

#subjectProgress .progress-bar {
    background-color: #bd93f9; /* Purple for subject progress */
    color: #1a1a2e;
}

.section-divider {
    margin: 30px 0;
    border: 0;
    border-top: 1px solid #33334d;
}

/* --- Task List (Table) --- */
.filter-section {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 25px;
    padding: 15px;
    background-color: #2a2a4a;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.filter-group {
    flex: 1;
    min-width: 180px;
}
.filter-group label {
    margin-bottom: 5px;
    font-weight: normal;
    color: #bbbbbb; /* Lighter grey for filter labels */
}
.filter-group select {
    margin-bottom: 0;
}


.task-table-container {
    max-height: 650px; /* Fixed height for scrolling */
    overflow-y: auto;
    border: 1px solid #33334d;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    background-color: #1a1a2e;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
    font-size: 1em; /* Slightly larger font for table */
    line-height: 1.4;
}

th, td {
    padding: 12px 10px; /* Adjusted padding for more columns */
    text-align: left;
    border-bottom: 1px solid #2a2a4a; /* Darker border for rows */
    font-size: 0.95em; /* Larger font within cells */
    white-space: nowrap; /* Prevent text wrapping in headers */
}

th {
    background-color: #2a2a4a; /* Darker header background */
    color: #8be9fd; /* Bright blue for header text */
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
    text-shadow: 0 0 5px rgba(139, 233, 253, 0.1);
}

/* Zebra striping for rows */
tr:nth-child(even) {
    background-color: #1f1f3a;
}

/* Hover effect for rows */
tr:hover {
    background-color: #33334d; /* Slightly lighter dark on hover */
    transition: background-color 0.2s ease;
}

/* Column widths (Adjust these to fit content and screen size) */
th:nth-child(1), td:nth-child(1) { width: 90px; } /* Subject */
th:nth-child(2), td:nth-child(2) { width: 250px; } /* Reading Name */
th:nth-child(3), td:nth-child(3), /* Video Done */
th:nth-child(5), td:nth-child(5), /* SCH Quiz Done */
th:nth-child(7), td:nth-child(7), /* UWorld Quiz Done */
th:nth-child(9), td:nth-child(9), /* Rev 1 Done */
th:nth-child(11), td:nth-child(11), /* Rev 2 Done */
th:nth-child(13), td:nth-child(13) { /* Rev 3 Done */
    width: 60px;
    text-align: center;
}
th:nth-child(4), td:nth-child(4), /* Video Date */
th:nth-child(6), td:nth-child(6), /* SCH Quiz Date */
th:nth-child(8), td:nth-child(8), /* UWorld Quiz Date */
th:nth-child(10), td:nth-child(10), /* Rev 1 Date */
th:nth-child(12), td:nth-child(12), /* Rev 2 Date */
th:nth-child(14), td:nth-child(14) { /* Rev 3 Date */
    width: 80px; /* Shorter width for MM-DD format */
    font-size: 0.9em;
}
th:nth-child(15), td:nth-child(15) { width: 100px; } /* Confidence */
th:nth-child(16), td:nth-child(16) { width: auto; min-width: 150px;} /* Issue Remarks */
th:nth-child(17), td:nth-child(17) { width: 100px; } /* Overall Status */


td input[type="date"],
td select,
td textarea {
    width: calc(100% - 10px); /* Adjust width for padding inside td */
    margin-bottom: 0;
    padding: 5px 8px; /* Even smaller padding within table cells */
    font-size: 0.8em; /* Smaller font within table cells */
    background-color: #1a1a2e; /* Darker background for table inputs */
    color: #e0e0e0;
}

td textarea {
    resize: vertical;
    min-height: 30px;
}

.centered-content {
    text-align: center;
}

/* Styles for blocked/locked tasks */
.locked {
    opacity: 0.5; /* More dimming for dark theme */
    pointer-events: none;
    background-color: #121220 !important; /* Very dark for locked rows */
    color: #777;
}
.locked td {
    background-color: #121220 !important;
}
.locked tr:hover {
    background-color: #121220 !important; /* No hover effect for locked rows */
}


/* Status Colors for Table Cells (adjusted for dark theme) */
td.status-cell {
    font-weight: bold;
    padding: 6px 10px;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    text-shadow: 0 0 5px rgba(0,0,0,0.3);
}
td.status-Pending { background-color: #f1fa8c; color: #1a1a2e; } /* Yellow */
td.status-InProgress { background-color: #8be9fd; color: #1a1a2e; } /* Light Blue/Cyan */
td.status-Completed { background-color: #50fa7b; color: #1a1a2e; } /* Bright Green */
td.status-Blocked { background-color: #ff6e6e; color: #1a1a2e; } /* Red */

/* Confidence Colors (for select background, adjusted for dark theme) */
td select.confidence-Low { background-color: #ff6e6e; color: #1a1a2e; }
td select.confidence-Medium { background-color: #f1fa8c; color: #1a1a2e; }
td select.confidence-High { background-color: #50fa7b; color: #1a1a2e; }

.error-message {
    color: #ff6e6e;
    text-align: center;
    padding: 10px;
    background-color: #3a1a1a;
    border: 1px solid #ff6e6e;
    border-radius: 5px;
    display: none;
    margin-top: 20px;
}

/* --- Data Management Section --- */
.data-management {
    margin-top: 30px;
    padding: 25px;
    background-color: #2a2a4a;
    border-radius: 10px;
    box-shadow: inset 0 1px 5px rgba(0,0,0,0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
.data-management textarea {
    width: calc(100% - 22px);
    min-height: 120px;
    font-family: 'Cascadia Code', 'Fira Code', monospace;
    font-size: 0.9em;
    background-color: #1a1a2e;
    color: #f8f8f2; /* Lighter text for code area */
    border: 1px solid #4a4a6e;
}
.data-management .button-group {
    justify-content: flex-start;
    display: flex;
    gap: 10px;
    margin-top: 15px;
    flex-wrap: wrap;
}

/* Loader spinner */
.loader {
    border: 5px solid #4a4a6e;
    border-top: 5px solid #8be9fd;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
    display: none;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Scrollbar styling for dark theme */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: #1a1a2e;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #4a4a6e;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #6a6a90;
}
