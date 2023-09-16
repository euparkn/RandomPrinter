import ListStyleCircle from "components/_Atoms/ListStyleCircle";

function ListItem({ num, text }: { num: number; text: string }) {
  return (
    <div className="list-item">
      <ListStyleCircle num={num} />
      <p>{text}</p>
    </div>
  );
}

export default ListItem;
