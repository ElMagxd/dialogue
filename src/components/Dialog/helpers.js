import dayjs from "dayjs";

export const normalizeDialog = dialog => {
  const newDialog = [];

  dialog.forEach((item, i) => {
	const first = dayjs((i === 0 ? item : dialog[i - 1]).date);
	const diff = first.diff(item.date, "day");

	if (i === 0 || diff) {
        newDialog.push({
			type: "title",
			id: `item-title-${item.id}`,
			date: item.date,
        });
	}

    if (i === 0 || item.is !== dialog[i - 1].is || diff) {
      newDialog.push({
        type: "message",
        id: `item-message-${item.id}`,
        avatar: item.avatar,
        isReverse: item.is === "my",
        messages: [
          {
            text: item.message,
            status: item.status,
            id: item.id,
            date: item.date,
          },
        ],
      });
    } else {
		const position = newDialog.length - 1;
		const currentItem = newDialog[position];

		newDialog[position] = {
			...currentItem,
			messages: currentItem.messages.concat({
				text: item.message,
				status: item.status,
				id: item.id,
				date: item.date,
			}),
		};
    }
  });
  return newDialog;
};
