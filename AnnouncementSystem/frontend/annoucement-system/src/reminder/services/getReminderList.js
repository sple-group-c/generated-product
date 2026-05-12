const getReminderList = () => {
  return Promise.resolve({
    data: {
      data: [
        { id: 1, name: "Dummy Reminder 1", message: "First test reminder" },
        { id: 2, name: "Dummy Reminder 2", message: "Second test reminder" },
        { id: 3, name: "Dummy Reminder 3", message: "Third test reminder" },
      ],
    },
  });
};

export default getReminderList;
