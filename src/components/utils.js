const initialList = [
    {
        id: "1",
        task: "This is task 1. jhskuha eljfh eu",
        status: "pending",
        priority: "medium",
    },
    {
        id: "2",
        task: "This is task 2. jhskwewwatre4yfh eu",
        status: "pending",
        priority: "low",
    },
    {
        id: "3",
        task: "This is task 3. jhskurwjergtytqury hggvekf heljfht eu",
        status: "pending",
        priority: "high",
    },
    {
        id: "4",
        task: "This is task 4.  qwer fttu gqh wrereu",
        status: "pending",
        priority: "medium",
    },
    {
        id: "5",
        task: "This is task 5. jhskuwrefh g fg6t7 67t76t sfefgeu",
        status: "pending",
        priority: "low",
    },
    {
        id: "6",
        task: "This is task 6. jhssdefgfwrf werffrefwg ygfyhf",
        status: "pending",
        priority: "medium",
    },
    {
        id: "7",
        task: "This is task 7. ",
        status: "pending",
        priority: "high",
    },
    {
        id: "8",
        task: "This is task 8. wyguysaeu",
        status: "pending",
        priority: "low",
    },
    {
        id: "9",
        task: "This is task 9. jhskuhafefbhghdhfhfagarhrgqreljffwgjhwheu",
        status: "pending",
        priority: "medium",
    },
    {
        id: "10",
        task: "This is task 10. jhskuha eljfh eu",
        status: "running",
        priority: "medium",
    },
    {
        id: "11",
        task: "task 11.",
        status: "running",
        priority: "low",
    },
    {
        id: "12",
        task: "This is task 12. jhskuha eljfh eu",
        status: "running",
        priority: "high",
    },
    {
        id: "16",
        task: "task 16.",
        status: "completed",
        priority: "medium",
    },
    {
        id: "13",
        task: "This is task 13. jhskuha eljfh eu",
        status: "running",
        priority: "high",
    },
    {
        id: "17",
        task: "task 17.",
        status: "completed",
        priority: "medium",
    },
    {
        id: "14",
        task: "This is task 14. jhskuha eljfh eu",
        status: "running",
        priority: "medium",
    },
    {
        id: "18",
        task: "task 18.",
        status: "completed",
        priority: "high",
    },
    {
        id: "15",
        task: "This is task 15. jhskuha eljfh eu",
        status: "running",
        priority: "low",
    },
    {
        id: "19",
        task: "task 19.",
        status: "completed",
        priority: "high",
    },
];

const generateId = () => {
    const d = new Date();
    let month = d.getMonth().toString();
    let year = d.getFullYear().toString();
    let date = d.getDate().toString();
    let hour = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    let seconds = d.getSeconds().toString();

    let id = year+month+date+hour+minutes+seconds;
    return id;
}

const getInitialPendingList = () => {
    // if(!localStorage.getItem("lsPendingList")){
        return initialList.filter(li => li.status === "pending");
    // }
    // return JSON.parse(localStorage.getItem("lsPendingList"));
}

const getInitialRunningList = () => {
    // if(!localStorage.getItem("lsRunningList")){
        return initialList.filter(li => li.status === "running");
    // }
    // return JSON.parse(localStorage.getItem("lsRunningList"));
}

const getInitialCompletedList = () => {
    // if(!localStorage.getItem("lsCompletedList")){
        return initialList.filter(li => li.status === "completed");
    // }
    // return JSON.parse(localStorage.getItem("lsCompletedList"));
}

export {initialList, generateId, getInitialPendingList, getInitialRunningList, getInitialCompletedList};