export default function CircleMarker(props: {
  done: boolean;
  setDone: () => void;
}) {
  const { done, setDone } = props;

  return (
    <div>
      <input type="checkbox" checked={done} onChange={setDone}/>
    </div>
  );
}
