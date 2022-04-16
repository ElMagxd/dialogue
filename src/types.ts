export type Status = "readed" | "sended";

export interface IServerMessage {
	avatar: string;
	message: string;
	id: number;
	date: string;
	is: "my" | "her";
	status?: Status;
}
