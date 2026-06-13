window.onload = function(){

    loadHistory();

};

function loadHistory(){

    let historyList =
    document.getElementById(
        "historyList"
    );

    let scans =
    JSON.parse(
        localStorage.getItem(
            "scanHistory"
        )
    ) || [];

    historyList.innerHTML = "";

    if(scans.length === 0){

        historyList.innerHTML =

        `<div class="history-card">

            <div class="details">

                <h3>No Scan History Found</h3>

            </div>

        </div>`;

        return;
    }

    scans.forEach(scan => {

        historyList.innerHTML +=

        `<div class="history-card">

            <div class="icon">

                🌿

            </div>

            <div class="details">

                <h3>${scan.disease}</h3>

                <p>Confidence:
                ${scan.confidence}%</p>

                <p>Date:
                ${scan.date}</p>

            </div>

        </div>`;

    });

}

function clearHistory(){

    let confirmDelete =
    confirm(
        "Are you sure you want to clear history?"
    );

    if(confirmDelete){

        localStorage.removeItem(
            "scanHistory"
        );

        loadHistory();

        alert(
            "History Cleared"
        );

    }

}