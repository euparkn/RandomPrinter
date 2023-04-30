function ListStyleCircle({ num }: { num: number | string }) {
  return <span className={`list-style-circle num-${num}`}>{num}</span>;
}

export default ListStyleCircle;
