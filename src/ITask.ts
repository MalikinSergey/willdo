export default interface ITask{
    id?: number,
    user_id?: number,
    name: string,
    status: "active" | "hold"
}
