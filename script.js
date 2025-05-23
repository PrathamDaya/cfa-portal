const EXAM_DATE_STRING = "2025-11-23"; // Your exam date
const LOCAL_STORAGE_KEY = 'studyTrackerData_V3'; // Changed key for this version with new columns
let tasks = [];

// --- Initial Data (Your provided list with new column considerations) ---
// Note: We'll add default values for new columns in initializeTask
const initialTasksData = [
    { Task_ID: "QUANT_1", Subject: "Quant", Reading_Name: "Basics of Multiple Regression and Underlying Assumptions" },
    { Task_ID: "QUANT_2", Subject: "Quant", Reading_Name: "Evaluating Regression Model Fit and Interpreting Model Results" },
    { Task_ID: "QUANT_3", Subject: "Quant", Reading_Name: "Model Misspecification" },
    { Task_ID: "QUANT_4", Subject: "Quant", Reading_Name: "Extensions of Multiple Regression" },
    { Task_ID: "QUANT_5", Subject: "Quant", Reading_Name: "Time-Series Analysis" },
    { Task_ID: "QUANT_6", Subject: "Quant", Reading_Name: "Machine Learning" },
    { Task_ID: "QUANT_7", Subject: "Quant", Reading_Name: "Big Data Projects" },
    { Task_ID: "ECON_8", Subject: "Econ", Reading_Name: "Currency Exchange Rates: Understanding Equilibrium Value" },
    { Task_ID: "ECON_9", Subject: "Econ", Reading_Name: "Economic Growth" },
    { Task_ID: "FSA_10", Subject: "FSA", Reading_Name: "Intercorporate Investments" },
    { Task_ID: "FSA_11", Subject: "FSA", Reading_Name: "Employee Compensation: Post-Employment and Share-Based" },
    { Task_ID: "FSA_12", Subject: "FSA", Reading_Name: "Multinational Operations" },
    { Task_ID: "FSA_13", Subject: "FSA", Reading_Name: "Analysis of Financial Institutions" },
    { Task_ID: "FSA_14", Subject: "FSA", Reading_Name: "Evaluating Quality of Financial Reports" },
    { Task_ID: "FSA_15", Subject: "FSA", Reading_Name: "Integration of Financial Statement Analysis Techniques" },
    { Task_ID: "CORP_16", Subject: "Corp", Reading_Name: "Analysis of Dividends and Share Repurchases" },
    { Task_ID: "CORP_17", Subject: "Corp", Reading_Name: "Environmental, Social, and Governance (ESG) Considerations in Investment Analysis" },
    { Task_ID: "CORP_18", Subject: "Corp", Reading_Name: "Cost of Capital: Advanced Topics" },
    { Task_ID: "CORP_19", Subject: "Corp", Reading_Name: "Corporate Restructuring" },
    { Task_ID: "EQUITY_20", Subject: "Equity", Reading_Name: "Equity Valuation: Applications and Processes" },
    { Task_ID: "EQUITY_21", Subject: "Equity", Reading_Name: "Discounted Dividend Valuation" },
    { Task_ID: "EQUITY_22", Subject: "Equity", Reading_Name: "Free Cash Flow Valuation" },
    { Task_ID: "EQUITY_23", Subject: "Equity", Reading_Name: "Market-Based Valuation: Price and Enterprise Value Multiples" },
    { Task_ID: "EQUITY_24", Subject: "Equity", Reading_Name: "Residual Income Valuation" },
    { Task_ID: "EQUITY_25", Subject: "Equity", Reading_Name: "Private Company Valuation" },
    { Task_ID: "FINCOME_26", Subject: "F Income", Reading_Name: "The Term Structure and Interest Rate Dynamics" },
    { Task_ID: "FINCOME_27", Subject: "F Income", Reading_Name: "The Arbitrage-Free Valuation Framework" },
    { Task_ID: "FINCOME_28", Subject: "F Income", Reading_Name: "Valuation and Analysis of Bonds with Embedded Options" },
    { Task_ID: "FINCOME_29", Subject: "F Income", Reading_Name: "Credit Analysis Models" },
    { Task_ID: "FINCOME_30", Subject: "F Income", Reading_Name: "Credit Default Swaps" },
    { Task_ID: "DERIV_31", Subject: "Derivatives", Reading_Name: "Pricing and Valuation of Forward Commitments" },
    { Task_ID: "DERIV_32", Subject: "Derivatives", Reading_Name: "Valuation of Contingent Claims" },
    { Task_ID: "ALTINV_33", Subject: "Alt Inv", Reading_Name: "Introduction to Commodities and Commodity Derivatives" },
    { Task_ID: "ALTINV_34", Subject: "Alt Inv", Reading_Name: "Overview of Types of Real Estate Investment" },
    { Task_ID: "ALTINV_35", Subject: "Alt Inv", Reading_Name: "Investments in Real Estate through Publicly Traded Securities" },
    { Task_ID: "ALTINV_36", Subject: "Alt Inv", Reading_Name: "Hedge Fund Strategies" },
    { Task_ID: "PORTMGT_37", Subject: "Port Mgmt", Reading_Name: "Economics and Investment Markets" },
    { Task_ID: "PORTMGT_38", Subject: "Port Mgmt", Reading_Name: "Analysis of Active Portfolio Management" },
    { Task_ID: "PORTMGT_39", Subject: "Port Mgmt", Reading_Name: "Exchange-Traded Funds: Mechanics and Applications" },
    { Task_ID: "PORTMGT_40", Subject: "Port Mgmt", Reading_Name: "Using Multifactor Models" },
    { Task_ID: "PORTMGT_41", Subject: "Port Mgmt", Reading_Name: "Measuring and Managing Market Risk" },
    { Task_ID: "PORTMGT_42", Subject: "Port Mgmt", Reading_Name: "Backtesting and Simulation" },
    { Task_ID: "ETHICS_43", Subject: "Ethics", Reading_Name: "Code of Ethics and Standards of Professional Conduct" },
    { Task_ID: "ETHICS_44", Subject: "Ethics", Reading_Name: "Guidance for Standards I–VII" },
    { Task_ID: "ETHICS_45", Subject: "Ethics", Reading_Name: "Application of the Code and Standards: Level II" }
];

// --- DOM Elements ---
const loader = document.getElementById('loader');
const taskListBody = document.getElementById('taskListBody');
const errorMessageDiv = document.getElementById('errorMessage');
const overallProgressBar = document.getElementById('overallProgressBar');
const completedTasksSpan = document.getElementById('completedTasks');
const totalTasksSpan = document.getElementById('totalTasks');
const subjectProgressDiv = document.getElementById('subjectProgress');
const filterSubjectSelect = document.getElementById('filterSubject');
const filterStatusSelect = document.getElementById('filterStatus');
const filterConfidenceSelect = document.getElementById('filterConfidence');
const examCountdownEl = document.getElementById('examCountdown');
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const clearDataBtn = document.getElementById('clearDataBtn');
const dataTextarea = document.getElementById('dataTextarea');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');


// --- Initialization ---
window.onload = function() {
    loadTasks();
    updateExamCountdown();
    setInterval(updateExamCountdown, 1000 * 60);

    filterSubjectSelect.addEventListener('change', renderTasks);
    filterStatusSelect.addEventListener('change', renderTasks);
    filterConfidenceSelect.addEventListener('change', renderTasks);

    exportDataBtn.addEventListener('click', exportData);
    importDataBtn.addEventListener('click', importData);
    clearDataBtn.addEventListener('click', clearAllData);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            activateTab(tab);
        });
    });
    activateTab('dashboard'); // Default to dashboard
};

function activateTab(tabName) {
    tabButtons.forEach(button => {
        if (button.dataset.tab === tabName) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    tabContents.forEach(content => {
        if (content.id === tabName) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    if (tabName === 'myTasks') {
        renderTasks(); // Ensure tasks are rendered when 'My Tasks' tab is opened
    } else if (tabName === 'dashboard') {
        updateDashboard(); // Refresh dashboard when it's opened
    }
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to format date from YYYY-MM-DD to MM-DD
function formatMonthDay(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[1]}-${parts[2]}`; // MM-DD
    }
    return dateString; // Return as is if not in expected format
}

function updateExamCountdown() {
    const examDate = new Date(EXAM_DATE_STRING);
    const now = new Date();
    const diffTime = examDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        examCountdownEl.innerHTML = `${diffDays} days until Exam (${new Date(EXAM_DATE_STRING).toLocaleDateString()})`;
    } else if (diffDays === 0) {
        examCountdownEl.textContent = "Exam is Today! Good luck!";
    } else {
        examCountdownEl.textContent = "Exam date has passed.";
    }
}

function initializeTask(taskData) {
    // Ensure all necessary fields exist with defaults
    const defaults = {
        Prerequisite_Task_ID: "",
        Video_Completed: false,
        Video_Comp_Date: "",
        SCH_Quiz_Completed: false, // New field
        SCH_Quiz_Date: "", // New field
        UWorld_Quiz_Completed: false, // New field
        UWorld_Quiz_Date: "", // New field
        Rev_1_Completed: false,
        Rev_1_Date: "",
        Rev_2_Completed: false, // New field
        Rev_2_Date: "", // New field
        Rev_3_Completed: false, // New field
        Rev_3_Date: "", // New field
        Confidence: "",
        Issue_Remarks: "",
        Last_Updated: ""
    };
    // Merge defaults and existing data, ensuring booleans are handled
    const merged = { ...defaults, ...taskData };
    // Ensure boolean types for all _Completed fields
    merged.Video_Completed = !!merged.Video_Completed;
    merged.SCH_Quiz_Completed = !!merged.SCH_Quiz_Completed;
    merged.UWorld_Quiz_Completed = !!merged.UWorld_Quiz_Completed;
    merged.Rev_1_Completed = !!merged.Rev_1_Completed;
    merged.Rev_2_Completed = !!merged.Rev_2_Completed;
    merged.Rev_3_Completed = !!merged.Rev_3_Completed;

    return merged;
}

function loadTasks() {
    showLoader(true);
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
        tasks = JSON.parse(savedTasks).map(initializeTask); // Ensure all fields are present after loading
    } else {
        // First time load: Use initial data and ensure all fields are present
        tasks = initialTasksData.map(initializeTask);
        saveTasks(); // Save the initialized structure
    }
    processTasks(); // Calculate statuses and prerequisites
    populateFilters();
    renderTasks();
    updateDashboard();
    showLoader(false);
}

function processTasks() {
    tasks.forEach(task => {
        // Determine overall completion based on all "completed" steps
        task.isCompleted = task.Video_Completed && task.SCH_Quiz_Completed && task.UWorld_Quiz_Completed &&
                           task.Rev_1_Completed && task.Rev_2_Completed && task.Rev_3_Completed;
    });

    tasks.forEach(task => {
        if (task.Prerequisite_Task_ID) {
            const prereq = tasks.find(t => t.Task_ID === task.Prerequisite_Task_ID);
            task.isPrerequisiteMet = prereq ? prereq.isCompleted : true;
        } else {
            task.isPrerequisiteMet = true;
        }

        if (!task.isPrerequisiteMet) {
            task.overallStatus = "Blocked";
        } else if (task.isCompleted) {
            task.overallStatus = "Completed";
        } else if (task.Video_Completed || task.SCH_Quiz_Completed || task.UWorld_Quiz_Completed ||
                   task.Rev_1_Completed || task.Rev_2_Completed || task.Rev_3_Completed) {
            // If at least one step is completed, but not all, it's in progress
            task.overallStatus = "In Progress";
        } else {
            task.overallStatus = "Pending";
        }
    });
}

function saveTasks() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function populateFilters() {
    const subjects = [...new Set(tasks.map(task => task.Subject).filter(Boolean))];
    filterSubjectSelect.innerHTML = '<option value="">All Subjects</option>';
    subjects.sort().forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        filterSubjectSelect.appendChild(option);
    });
}

function renderTasks() {
    taskListBody.innerHTML = '';
    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
        taskListBody.innerHTML = '<tr><td colspan="17" style="text-align:center; padding: 20px;">No tasks match your current filters.</td></tr>';
        return;
    }

    filteredTasks.forEach(task => {
        const row = taskListBody.insertRow();
        row.dataset.taskId = task.Task_ID; // Keep task ID in dataset for lookup
        if (!task.isPrerequisiteMet) {
            row.classList.add('locked');
        }

        let statusCellClass = `status-${task.overallStatus?.replace(/\s+/g, '')}`;

        row.innerHTML = `
            <td>${task.Subject || 'N/A'}</td>
            <td>${task.Reading_Name || 'N/A'}</td>
            <td class="centered-content">
                <input type="checkbox" id="video_comp_${task.Task_ID}"
                       data-field="Video_Completed" ${task.Video_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="video_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.Video_Comp_Date || '')}" data-field="Video_Comp_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td class="centered-content">
                <input type="checkbox" id="sch_quiz_comp_${task.Task_ID}"
                       data-field="SCH_Quiz_Completed" ${task.SCH_Quiz_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="sch_quiz_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.SCH_Quiz_Date || '')}" data-field="SCH_Quiz_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td class="centered-content">
                <input type="checkbox" id="uworld_quiz_comp_${task.Task_ID}"
                       data-field="UWorld_Quiz_Completed" ${task.UWorld_Quiz_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="uworld_quiz_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.UWorld_Quiz_Date || '')}" data-field="UWorld_Quiz_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td class="centered-content">
                <input type="checkbox" id="rev1_comp_${task.Task_ID}"
                       data-field="Rev_1_Completed" ${task.Rev_1_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="rev1_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.Rev_1_Date || '')}" data-field="Rev_1_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td class="centered-content">
                <input type="checkbox" id="rev2_comp_${task.Task_ID}"
                       data-field="Rev_2_Completed" ${task.Rev_2_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="rev2_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.Rev_2_Date || '')}" data-field="Rev_2_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td class="centered-content">
                <input type="checkbox" id="rev3_comp_${task.Task_ID}"
                       data-field="Rev_3_Completed" ${task.Rev_3_Completed ? 'checked' : ''}
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <input type="text" id="rev3_date_${task.Task_ID}" readonly
                       value="${formatMonthDay(task.Rev_3_Date || '')}" data-field="Rev_3_Date"
                       ${!task.isPrerequisiteMet ? 'disabled' : ''}>
            </td>
            <td>
                <select id="confidence_${task.Task_ID}" data-field="Confidence"
                        class="confidence-${task.Confidence}" ${!task.isPrerequisiteMet ? 'disabled' : ''}>
                        ${createConfidenceOptions(task.Confidence)}
                </select>
            </td>
            <td>
                <textarea id="remarks_${task.Task_ID}" data-field="Issue_Remarks" rows="2"
                          ${!task.isPrerequisiteMet ? 'disabled' : ''}>${task.Issue_Remarks || ''}</textarea>
            </td>
            <td class="status-cell ${statusCellClass}">${task.overallStatus}</td>
        `;
    });

    // Attach event listeners after rendering
    taskListBody.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxUpdate);
    });
    taskListBody.querySelectorAll('select, textarea').forEach(el => {
        el.addEventListener('change', handleFieldUpdate);
    });
}

function getFilteredTasks() {
    const subjectFilter = filterSubjectSelect.value;
    const statusFilter = filterStatusSelect.value;
    const confidenceFilter = filterConfidenceSelect.value;

    return tasks.filter(task => {
        const subjectMatch = !subjectFilter || task.Subject === subjectFilter;
        const statusMatch = !statusFilter || task.overallStatus === statusFilter;
        const confidenceMatch = !confidenceFilter || task.Confidence === confidenceFilter;
        return subjectMatch && statusMatch && confidenceMatch;
    });
}

function createConfidenceOptions(currentConfidence) {
    const levels = ["", "Low", "Medium", "High"];
    return levels.map(l => `<option value="${l}" ${l === currentConfidence ? 'selected' : ''}>${l}</option>`).join('');
}

function handleCheckboxUpdate(event) {
    const checkbox = event.target;
    const field = checkbox.dataset.field; // e.g., 'Video_Completed'
    const taskId = checkbox.closest('tr').dataset.taskId;
    const isChecked = checkbox.checked;

    const taskToUpdate = tasks.find(t => t.Task_ID === taskId);
    if (taskToUpdate) {
        taskToUpdate[field] = isChecked;

        // Determine the corresponding date field
        let dateField = '';
        if (field === 'Video_Completed') {
            dateField = 'Video_Comp_Date';
        } else if (field === 'SCH_Quiz_Completed') {
            dateField = 'SCH_Quiz_Date';
        } else if (field === 'UWorld_Quiz_Completed') {
            dateField = 'UWorld_Quiz_Date';
        } else if (field === 'Rev_1_Completed') {
            dateField = 'Rev_1_Date';
        } else if (field === 'Rev_2_Completed') {
            dateField = 'Rev_2_Date';
        } else if (field === 'Rev_3_Completed') {
            dateField = 'Rev_3_Date';
        }

        if (dateField) {
            taskToUpdate[dateField] = isChecked ? getTodayDate() : '';
            // Update the date input element in the DOM directly with formatted date
            const dateInputId = dateField.toLowerCase().replace(/_/g, '') + '_' + taskId;
            const dateInput = document.getElementById(dateInputId);
            if (dateInput) {
                dateInput.value = formatMonthDay(taskToUpdate[dateField]);
            }
        }
        taskToUpdate.Last_Updated = new Date().toISOString();
    }
    processTasks();
    saveTasks();
    renderTasks(); // Re-render to update statuses and potential blocking/unblocking
    updateDashboard();
}

function handleFieldUpdate(event) {
    const el = event.target;
    const field = el.dataset.field;
    const taskId = el.closest('tr').dataset.taskId;
    const value = el.value;

    const taskToUpdate = tasks.find(t => t.Task_ID === taskId);
    if (taskToUpdate) {
        taskToUpdate[field] = value;
        taskToUpdate.Last_Updated = new Date().toISOString();
    }
    processTasks();
    saveTasks();
    renderTasks(); // Re-render to update statuses and potential blocking/unblocking
    updateDashboard();
}


function updateDashboard() {
    const completedCount = tasks.filter(task => task.overallStatus === 'Completed').length;
    const totalCount = tasks.length;

    totalTasksSpan.textContent = totalCount;
    completedTasksSpan.textContent = completedCount;

    const overallPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    overallProgressBar.style.width = `${overallPercentage}%`;
    overallProgressBar.textContent = `${overallPercentage}%`;

    subjectProgressDiv.innerHTML = '<h2>Progress by Subject</h2>'; // Reset to keep heading
    const subjects = [...new Set(tasks.map(task => task.Subject).filter(Boolean))];
    subjects.sort().forEach(subject => {
        const subjectTasks = tasks.filter(task => task.Subject === subject);
        const subjectCompleted = subjectTasks.filter(task => task.overallStatus === 'Completed').length;
        const subjectTotal = subjectTasks.length;
        const subjectPercentage = subjectTotal > 0 ? Math.round((subjectCompleted / subjectTotal) * 100) : 0;

        const subjectProgressHTML = `<h4>${subject} (${subjectCompleted}/${subjectTotal})</h4>
        <div class="progress-container"><div class="progress-bar" style="width:${subjectPercentage}%;">${subjectPercentage}%</div></div>`;
        subjectProgressDiv.innerHTML += subjectProgressHTML;
    });
}

function exportData() {
    dataTextarea.value = JSON.stringify(tasks, null, 2); // Pretty print JSON
    alert("Data copied to the textbox below. You can copy this text and save it in a file as a backup.");
}

function importData() {
    const dataToImport = dataTextarea.value;
    if (!dataToImport) {
        alert("Please paste your previously exported data into the textbox first.");
        return;
    }
    try {
        const importedTasks = JSON.parse(dataToImport);
        if (Array.isArray(importedTasks)) {
            if (confirm("Are you sure you want to overwrite current data with the imported data?")) {
                tasks = importedTasks.map(initializeTask); // Ensure fields on import too
                processTasks();
                saveTasks();
                populateFilters(); // In case subjects changed
                renderTasks();
                updateDashboard();
                dataTextarea.value = ""; // Clear textarea
                alert("Data imported successfully!");
            }
        } else {
            alert("Import failed: The data doesn't seem to be in the correct format.");
        }
    } catch (e) {
        console.error("Import error:", e);
        alert("Import failed: Invalid JSON data. Please ensure you pasted the exact text from a previous export.");
    }
}

function clearAllData() {
    if (confirm("WARNING! Are you absolutely sure you want to clear ALL your study data? This cannot be undone unless you have a backup!")) {
        if (confirm("SECOND WARNING! Please confirm again you want to erase everything.")) {
            tasks = initialTasksData.map(initializeTask); // Reset to initial pre-loaded data
            processTasks();
            saveTasks();
            populateFilters();
            renderTasks();
            updateDashboard();
            alert("All data has been reset to the initial list.");
        }
    }
}

function showLoader(show) { loader.style.display = show ? 'block' : 'none'; }
// function showError(message) { errorMessageDiv.textContent = message; errorMessageDiv.style.display = 'block'; }
