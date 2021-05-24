export type Investor = {
    wallet: string;
    stakedVal: number;
}
export type Ong = {
    name: string;
    pic: string;
}
export type Pool = {
    cause: "Animal Rescue" | "Education" | "Health" | "Environment" | "Against Hunger";
    image: string;
    poolAmount: number;
    ongs: Ong[];
    investors: Investor[];
}