export type SimpleOrder = {
	id: string | undefined;
	codigo: string;
	status: string;
	data_criacao: string;
};

export type SocketCommand = {
	room_id: string;
	status: string;
	data: {};
};
