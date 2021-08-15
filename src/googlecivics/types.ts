export type RepresentativeInfoResponse = {
	kind: "civicinfo#representativeInfoResponse";
	normalizedInput: Address;
	divisions: {[id: string]: Division};
	offices: Office[];
	officials: Official[];
};

export type Division = {
	name: string;
	officeIndices: number[];
};

export type Office = {
	name: string;
	divisionId: string;
	levels: string[];
	roles: string[];
	officialIndices: number[];
};

export type Official = {
	name: string;
	address: Address[];
	party: string;
	phones: string[];
	emails: string[];
	urls: string[];
	photoUrl: string;
	channels: Channel[];
};

export type Address = {
	locationName?: string;
	line1: string;
	line2?: string;
	city: string;
	state: string;
	zip: string;
};

export type Channel = {
	type: string;
	id: string;
};